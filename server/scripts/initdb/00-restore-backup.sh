#!/usr/bin/env bash
set -euo pipefail

echo "[initdb] Checking for backup to restore..."

PRIMARY_BACKUP_PATH="/backup/backup.sql"
FALLBACK_BACKUP_PATH="/backup/backup-fallback.sql"

if [[ ! -f "$PRIMARY_BACKUP_PATH" && ! -f "$FALLBACK_BACKUP_PATH" ]]; then
  echo "[initdb] No backup file found at $PRIMARY_BACKUP_PATH or $FALLBACK_BACKUP_PATH. Skipping restore."
  exit 0
fi

echo "[initdb] Preparing restore into database: ${POSTGRES_DB:-postgres}"

# Detect UTF-16 source encoding (with BOM, or UTF-16LE without BOM)
detect_utf16_source_encoding() {
  local file_path="$1"
  local bom null_count

  # BOM detection (FF FE = LE, FE FF = BE)
  bom=$(head -c 2 "$file_path" | od -An -t x1 | tr -d ' \n') || true
  if [[ "$bom" == "fffe" ]]; then
    echo "UTF-16LE"
    return 0
  fi
  if [[ "$bom" == "feff" ]]; then
    echo "UTF-16BE"
    return 0
  fi

  # Some editors save UTF-16LE without BOM; null bytes are a strong signal.
  null_count=$(head -c 512 "$file_path" | tr -cd '\000' | wc -c | tr -d '[:space:]') || true
  if [[ "${null_count:-0}" -gt 0 ]]; then
    echo "UTF-16LE"
    return 0
  fi

  return 1
}

PSQL_ARGS=(
  -v ON_ERROR_STOP=1
  -U "${POSTGRES_USER:-postgres}"
  -d "${POSTGRES_DB:-postgres}"
  --single-transaction
)

restore_backup() {
  local file_path="$1"
  local source_encoding
  echo "[initdb] Restoring from: $file_path"

  if source_encoding=$(detect_utf16_source_encoding "$file_path"); then
    echo "[initdb] Detected ${source_encoding} backup. Converting to UTF-8 before restore..."
    iconv -f "$source_encoding" -t UTF-8 "$file_path" | psql "${PSQL_ARGS[@]}"
  else
    echo "[initdb] Assuming UTF-8 backup. Restoring..."
    psql "${PSQL_ARGS[@]}" -f "$file_path"
  fi
}

RESTORE_SUCCESS=0

if [[ -f "$PRIMARY_BACKUP_PATH" ]]; then
  if restore_backup "$PRIMARY_BACKUP_PATH"; then
    RESTORE_SUCCESS=1
  else
    echo "[initdb] Primary backup restore failed: $PRIMARY_BACKUP_PATH"
  fi
fi

if [[ $RESTORE_SUCCESS -eq 0 && -f "$FALLBACK_BACKUP_PATH" ]]; then
  echo "[initdb] Trying fallback backup..."
  if restore_backup "$FALLBACK_BACKUP_PATH"; then
    RESTORE_SUCCESS=1
  fi
fi

if [[ $RESTORE_SUCCESS -ne 1 ]]; then
  echo "[initdb] ERROR: all backup restore attempts failed."
  exit 1
fi

echo "[initdb] Restore completed successfully."



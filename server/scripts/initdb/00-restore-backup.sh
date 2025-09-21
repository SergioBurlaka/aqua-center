#!/usr/bin/env bash
set -euo pipefail

echo "[initdb] Checking for backup to restore..."

BACKUP_PATH="/backup/backup.sql"

if [[ ! -f "$BACKUP_PATH" ]]; then
  echo "[initdb] No backup file found at $BACKUP_PATH. Skipping restore."
  exit 0
fi

echo "[initdb] Found backup file. Preparing to restore into database: ${POSTGRES_DB:-postgres}"

# Detect UTF-16 BOM and convert to UTF-8 if needed
is_utf16_bom() {
  # returns 0 if BOM is UTF-16 (FF FE or FE FF)
  local bom
  bom=$(head -c 2 "$BACKUP_PATH" | od -An -t x1 | tr -d ' \n') || true
  [[ "$bom" == "fffe" || "$bom" == "feff" ]]
}

PSQL_ARGS=(
  -v ON_ERROR_STOP=1
  -U "${POSTGRES_USER:-postgres}"
  -d "${POSTGRES_DB:-postgres}"
  --single-transaction
)

if is_utf16_bom; then
  echo "[initdb] Detected UTF-16 backup. Converting to UTF-8 before restore..."
  iconv -f UTF-16 -t UTF-8 "$BACKUP_PATH" | psql "${PSQL_ARGS[@]}"
else
  echo "[initdb] Assuming UTF-8 backup. Restoring..."
  psql "${PSQL_ARGS[@]}" -f "$BACKUP_PATH"
fi

echo "[initdb] Restore completed successfully."



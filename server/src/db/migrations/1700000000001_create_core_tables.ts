/** @type {import('node-pg-migrate').MigrationBuilder} */
module.exports = {
  up: async (pgm: any) => {
    // clients
    pgm.createTable("clients", {
      id: { type: "serial", primaryKey: true },
      name: { type: "varchar(255)", notNull: true },
      address: { type: "text", notNull: true },
      email: { type: "varchar(255)", notNull: true },
      phone: { type: "bigint", notNull: true },
    }, { ifNotExists: true });
    // no unique constraint on clients.email in the current database dump

    // roles
    pgm.createTable("roles", {
      id: { type: "serial", primaryKey: true },
      role: { type: "varchar(255)", notNull: true },
    }, { ifNotExists: true });
    // align unique name with dump: roles_role_key
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'roles_role_key'
        ) THEN
          ALTER TABLE roles
            ADD CONSTRAINT roles_role_key UNIQUE (role);
        END IF;
      END
      $$;
    `);
    // seed roles ADMIN, WORKER, BRIGADIER if empty
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM roles) THEN
          INSERT INTO roles (role) VALUES ('ADMIN'), ('WORKER'), ('BRIGADIER');
        END IF;
      END
      $$;
    `);

    // brigades
    pgm.createTable("brigades", {
      id: { type: "bigserial", primaryKey: true },
      name: { type: "varchar(255)", notNull: true },
    }, { ifNotExists: true });

    // workers (references roles, brigades)
    pgm.createTable("workers", {
      id: { type: "serial", primaryKey: true },
      name: { type: "varchar(255)", notNull: true },
      email: { type: "varchar(255)", notNull: true },
      password: { type: "varchar(255)", notNull: true },
      role_id: { type: "integer", notNull: true },
      brigade_id: { type: "bigint", notNull: true },
    }, { ifNotExists: true });
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'workers_role_id_foreign'
        ) THEN
          ALTER TABLE workers
            ADD CONSTRAINT workers_role_id_foreign FOREIGN KEY (role_id)
            REFERENCES roles(id) ON DELETE RESTRICT;
        END IF;
      END
      $$;
    `);
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'workers_brigade_id_foreign'
        ) THEN
          ALTER TABLE workers
            ADD CONSTRAINT workers_brigade_id_foreign FOREIGN KEY (brigade_id)
            REFERENCES brigades(id) ON DELETE RESTRICT;
        END IF;
      END
      $$;
    `);

    // locations (references clients)
    pgm.createTable("locations", {
      id: { type: "bigserial", primaryKey: true },
      client_id: { type: "integer", notNull: true },
      name: { type: "text", notNull: true },
      location: { type: "varchar(255)", notNull: true },
      address: { type: "varchar(255)", notNull: true },
      email: { type: "varchar(255)", notNull: true },
      phone: { type: "bigint", notNull: true },
      new_column: { type: "bigint", notNull: true },
    }, { ifNotExists: true });
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'locations_client_id_foreign'
        ) THEN
          ALTER TABLE locations
            ADD CONSTRAINT locations_client_id_foreign FOREIGN KEY (client_id)
            REFERENCES clients(id) ON DELETE RESTRICT;
        END IF;
      END
      $$;
    `);
  },
  down: async (pgm: any) => {
    pgm.dropTable("locations");
    pgm.dropTable("workers");
    pgm.dropTable("brigades");
    pgm.dropTable("roles");
    pgm.dropTable("clients");
  },
};



/** @type {import('node-pg-migrate').MigrationBuilder} */
module.exports = {
  up: async (pgm: any) => {
    // Create users table
    pgm.createTable("users", {
      id: {
        type: "serial",
        primaryKey: true,
      },
      name: {
        type: "varchar(255)",
        notNull: true,
      },
      email: {
        type: "varchar(255)",
        notNull: true,
        unique: true,
      },
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("now()"),
      },
    }, { ifNotExists: true });

    // Insert initial data
    pgm.sql(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM users) THEN
          INSERT INTO users (name, email, created_at)
          VALUES 
            ('Alice Johnson', 'alicejhonson141212@yopmail.com', NOW()),
            ('Bop Jovy', 'bonsmith131313@yopmail.com', NOW())
          ON CONFLICT (email) DO NOTHING;
        END IF;
      END
      $$;
    `);
    
  },
  down: async (pgm: any) => {
    pgm.dropTable("users");
  },
};

/** @type {import('node-pg-migrate').MigrationBuilder} */
module.exports = {
  up: async (pgm) => {
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
    });

    // Insert initial data
    pgm.sql(`
      INSERT INTO users (name, email, created_at)
      VALUES 
        ('Alice Johnson', 'alicejhonson151212@yopmail.com', NOW()),
        ('Bob Smith', 'bobsmith151212@yopmail.com', NOW())
    `);
    
  },
  down: async (pgm) => {
    pgm.dropTable("users");
  },
};

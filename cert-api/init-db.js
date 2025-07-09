const db = require('./db');

async function initDatabase() {
  try {
    const [rows] = await db.query("SHOW TABLES LIKE 'certificats'");
    if (rows.length === 0) {
      console.log("table not found, creating...");

      await db.query(`
        CREATE TABLE certificats (
          id INT AUTO_INCREMENT PRIMARY KEY,
          domain VARCHAR(255) NOT NULL,
          valid VARCHAR(255) NOT NULL,
          expirationDate DATETIME NOT NULL,
          issuedDate DATETIME NOT NULL,
          authority VARCHAR(255) NOT NULL,
          keySize INT NOT NULL,
          algorithm VARCHAR(255) NOT NULL,
          lastRenewalDate VARCHAR(255)
        )
      `);

      console.log("table created successfully.");
    } else {
      console.log("table already exists.");
    }
  } catch (err) {
    console.error("Error during database initialization:", err);
  }
}

module.exports = initDatabase;

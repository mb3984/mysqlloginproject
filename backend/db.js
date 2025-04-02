import mysql from "mysql2/promise";

export const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Connected to MySQL database");
    return connection;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err; // Ensure errors are properly thrown
  }
};

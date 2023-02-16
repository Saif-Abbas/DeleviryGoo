const mysql = require("mysql");
// Load environment variables
require("dotenv").config();
// Initialize connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

// Create database if it doesn't exist
connection.query(
  "CREATE DATABASE IF NOT EXISTS " + process.env.DB_NAME,
  (err, result) => {
    if (err) throw err;
    console.log("Database created");
  }
);

// Use database for queries
connection.query("USE " + process.env.DB_NAME, (err, result) => {
  if (err) throw err;
  console.log(`Using database ${process.env.DB_NAME}`);
});

// Create table if it doesn't exist
connection.query(
  "CREATE TABLE IF NOT EXISTS ContactUs (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), message VARCHAR(255))",
  (err, result) => {
    if (err) throw err;
    console.log("Table created");
  }
);

// function to insert data into database
function insertData(name, email, phone, message) {
  connection.query(
    "INSERT INTO ContactUs (name, email, phone, message) VALUES ('" +
      name +
      "','" +
      email +
      "','" +
      phone +
      "','" +
      message +
      "')",
    (err, result) => {
      if (err) throw err;
      console.log("Data inserted");
    }
  );
}

// function to select data from database
function selectData(callback) {
  connection.query("SELECT * FROM ContactUs", async (err, result) => {
    if (err) throw err;
    callback(result);
  });
}

module.exports = { insertData, selectData };

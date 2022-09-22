const mysql = require("my-sql");

const connUri = {
  host: "localhost",
  user: "root",
  password: "sp@123",
  database: "ecommerce",
};

const conn = mysql.createConnection(connUri);
conn.connect((err) => {
  if (!err) {
    console.log("Connection is Success!");
  } else {
    console.log(err);
  }
});

module.exports = conn;

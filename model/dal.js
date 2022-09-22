const sql = require("./db");

exports.getAllCustomers = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM customers";
    sql.query(command, (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getAllProducts = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM products";
    sql.query(command, (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        resolve(rows);
      }
    });
  });
};

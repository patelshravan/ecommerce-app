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

exports.getById = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT * FROM customers WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      resolve(rows);
    });
  });
};

exports.remove = function (id) {
  return new Promise((resolve) => {
    let command = `DELETE FROM customers Where id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        resolve("Deleted!");
      }
    });
  });
};

exports.update = function (id, data) {
  return new Promise((resolve) => {
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `UPDATE customers SET contact_no="${data.contact_no}", modified_at="${timeStamp}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve(err);
      } else {
        resolve("Updated!");
      }
    });
  });
};

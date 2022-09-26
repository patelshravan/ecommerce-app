const sql = require("./db");

exports.getAllPayments = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM payments";
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
    let command = `SELECT * FROM payments WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      resolve(rows);
    });
  });
};

exports.insert = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `INSERT INTO payments(date_of_payment,amount,order_id,mode_of_payment,created_date,modified_date) values("${data.date_of_payment}","${data.amount}","${data.order_id}","${data.mode_of_payment}","${data.created_date}","${data.modified_date}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        resolve("Inserted!");
      }
    });
  });
};

exports.remove = function (id) {
  return new Promise((resolve) => {
    let command = `DELETE FROM payments Where id="${id}"`;
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
    let command = `UPDATE payments SET contact_no="${data.contact_no}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

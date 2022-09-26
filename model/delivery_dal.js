const sql = require("./db");

exports.getAllDelivery = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM delivery";
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
    let command = `SELECT * FROM delivery WHERE id="${id}"`;
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
    let command = `INSERT INTO delivery(order_id,status,location,vendor_id,created_date,modified_date) values("${data.order_id}","${data.status}","${data.location}","${data.vendor_id}","${data.created_date}","${data.modified_date}");`;
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
    let command = `DELETE FROM delivery Where id="${id}"`;
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
    let command = `UPDATE delivery SET contact_no="${data.contact_no}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

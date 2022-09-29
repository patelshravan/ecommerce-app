const sql = require("./db");

exports.getAllDeliveries = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM deliveries";
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
    let command = `SELECT * FROM deliveries WHERE id="${id}"`;
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
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `INSERT INTO deliveries(order_id,status,location,vendors_id,created_at,modified_at) values("${data.order_id}","${data.status}","${data.location}","${data.vendors_id}","${timeStamp}","${timeStamp}");`;
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
    let command = `DELETE FROM deliveries Where id="${id}"`;
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
    let command = `UPDATE deliveries SET contact_no="${data.contact_no}",modified_at="${timeStamp}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

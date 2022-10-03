const sql = require("./db");

exports.getAllCustomers = function (req) {
  return new Promise((resolve) => {
    let command = "SELECT * FROM customers";
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve("Some error occurred!");
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getById = function (req) {
  return new Promise((resolve) => {
    let id = req.params.id;
    let user = req.user;
    let command = `SELECT * FROM customers WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let dbUser = rows[0];
      if (dbUser.email !== user.email) {
        resolve("Unauthorized User");
      }
      resolve(dbUser);
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

exports.updatePassword = function (req) {
  let user = req.user;
  console.log("USER", user);
  console.log("REQ_BODY", req.body);
  let password = req.body.password;
  return new Promise((resolve) => {
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `UPDATE customers SET password="${password}", modified_at="${timeStamp}" WHERE email="${user.email}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve(err);
      } else {
        resolve("Password Updated!");
      }
    });
  });
};

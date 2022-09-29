const sql = require("./db");

// Customer
exports.customer_login = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `SELECT email FROM customers WHERE email="${data.email}" AND password="${data.password}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let allUsersStr = JSON.stringify(rows);
      var allUsers = JSON.parse(allUsersStr);
      if (allUsers.length > 0) {
        resolve(`Welcome ${data.email}`);
      } else {
        resolve("Invalid User!");
      }
    });
  });
};

exports.customer_register = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `INSERT INTO customers(firstname,lastname,email,contact_no,password, location, created_at, modified_at) values("${data.firstname}","${data.lastname}","${data.email}","${data.contact_no}","${data.password}","${data.location}","${timeStamp}","${timeStamp}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log(err);
        resolve("Failed, Enter Valid Details!");
      } else {
        resolve("Customer Registered!");
      }
    });
  });
};

// Seller
exports.seller_login = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `SELECT email FROM sellers WHERE email="${data.email}" AND password="${data.password}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let allUsersStr = JSON.stringify(rows);
      var allUsers = JSON.parse(allUsersStr);
      if (allUsers.length > 0) {
        resolve(`Welcome ${data.email}`);
      } else {
        resolve("Invalid User!");
      }
    });
  });
};

exports.seller_register = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `INSERT INTO sellers(name,location,email, contact_no, password, created_at, modified_at) values("${data.name}","${data.location}","${data.email}","${data.contact_no}","${data.password}","${timeStamp}","${timeStamp}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve(err);
      } else {
        resolve("Seller Registered!");
      }
    });
  });
};

// Staff
exports.staff_login = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `SELECT email FROM staffs WHERE email="${data.email}" AND password="${data.password}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let allUsersStr = JSON.stringify(rows);
      var allUsers = JSON.parse(allUsersStr);
      if (allUsers.length > 0) {
        resolve(`Welcome ${data.email}`);
      } else {
        resolve("Invalid User!");
      }
    });
  });
};

exports.staff_register = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `INSERT INTO sellers(firstname,lastname,email, contact_no,empid,password,created_at,modified_at) values("${data.firstname}","${data.lastname}","${data.email}","${data.contact_no}","${data.empid}","${data.password}","${timeStamp}","${timeStamp}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed, Enter Valid Details!");
      } else {
        resolve("Staff Registered!");
      }
    });
  });
};

// Staff
exports.vendor_login = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `SELECT email FROM vendors WHERE email="${data.email}" AND password="${data.password}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let allUsersStr = JSON.stringify(rows);
      var allUsers = JSON.parse(allUsersStr);
      if (allUsers.length > 0) {
        resolve(`Welcome ${data.email}`);
      } else {
        resolve("Invalid User!");
      }
    });
  });
};

exports.vendor_register = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let command = `INSERT INTO vendors(name,email,password, contact_no,modified_at,created_at) values("${data.name}","${data.email}","${data.password}","${data.contact_no}","${timeStamp}","${timeStamp}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed, Enter Valid Details!");
      } else {
        resolve("Vendor Registered!");
      }
    });
  });
};

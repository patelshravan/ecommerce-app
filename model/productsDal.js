const sql = require("./db");

exports.getAllProducts = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM products";
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve("Some error occurred!");
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getProductById = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT * FROM products WHERE id="${id}"`;
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
    let command = `INSERT INTO products(title,description,image_url,quantity,price,sellers_id,created_at,modified_at) values("${data.title}","${data.description}","${data.image_url}",${data.quantity},${data.price},${data.sellers_id},"${timeStamp}","${timeStamp}");`;

    console.log(command);
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
    let command = `DELETE FROM products Where id="${id}"`;
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
    let command = `UPDATE products SET quantity="${data.quantity}", modified_at="${timeStamp}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

const sql = require("./db");

exports.getAllOrders = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM orders";
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
    let command = `SELECT * FROM orders WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      resolve(rows);
    });
  });
};

exports.placeOrder = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    let dataQuery = "";
    let amount = 0;

    for (let i = 0; i < data.products.length; i++) {
      let productId = data.products[i].id;
      let productPrice = data.products[i].price;
      let productQuantity = data.products[i].quantity;

      amount += productPrice * productQuantity;

      dataQuery += `(@order_id, ${productId}, ${productPrice}, ${productQuantity},"${timeStamp}", "${timeStamp}"),`;
    }
    dataQuery = dataQuery.slice(0, -1);

    let command = `INSERT INTO orders (status, customer_id, created_at, modified_at) VALUES ("placed", ${data.customer_id}, "${timeStamp}", "${timeStamp}");
    SET @order_id = LAST_INSERT_ID();
    INSERT INTO ordersData (order_id, product_id, price, quantity, created_at, modified_at) VALUES ${dataQuery};
    INSERT INTO payments (amount, mode_of_payment, order_id, created_at, modified_at) VALUES (${amount}, "${data.payment_mode}", @order_id, "${timeStamp}", "${timeStamp}");`;

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
    let command = `DELETE FROM orders Where id="${id}"`;
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
    let command = `UPDATE orders SET contact_no="${data.contact_no}", modified_at="${timeStamp}" WHERE id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

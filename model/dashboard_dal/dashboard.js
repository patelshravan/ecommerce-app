const sql = require("../db");

exports.getOrderList = function () {
  return new Promise((resolve) => {
    let command = `SELECT status, COUNT(*) AS count FROM orders GROUP BY status;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getTotalAvailableProducts = function () {
  return new Promise((resolve) => {
    let command = `SELECT title,id,quantity FROM products WHERE quantity > 0;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getZeroAvailableProducts = function () {
  return new Promise((resolve) => {
    let command = `SELECT title,id,quantity FROM products WHERE quantity = 0;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getCategoryList = function () {
  return new Promise((resolve) => {
    let command = `SELECT products.category_id, category.name, COUNT(*) as count FROM products JOIN category ON (products.category_id = category.id) GROUP BY products.category_id;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getCustomerPersonalProfile = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT
    customers.firstname as firstname,
    customers.email as email,
    customers.contact_no as contact_no,
    orders.status as order_status,
    orders.modified_at as order_date,
    orders_data.quantity as order_quantity,
    orders_data.price as order_item_price,
    products.title as product_title,
    products.price as product_current_price,
    payments.mode_of_payment as mode_of_payment,
    customers.id as customer_id,
    orders.id as order_id,
    orders_data.id as orders_data_id,
    products.id as product_id,
    payments.id as payment_id
    FROM orders_data
    JOIN products ON orders_data.product_id = products.id
    JOIN orders ON orders_data.order_id = order_id
    JOIN payments ON orders.id = payments.order_id
    JOIN customers ON orders.customer_id = customers.id
    WHERE customers.id=${id} AND orders_data.product_id = products.id AND orders.id = payments.order_id AND orders.customer_id = customers.id AND orders.id = orders_data.order_id;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getSellerProfile = function () {
  return new Promise((resolve) => {
    let command = `SELECT name_of_seller,location,email,contact_no FROM seller;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getVendorProfile = function () {
  return new Promise((resolve) => {
    let command = `SELECT name_of_vendor,email,contact_no FROM vendor;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

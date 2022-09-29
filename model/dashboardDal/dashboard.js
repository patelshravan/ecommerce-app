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
    let command = `SELECT products.categories_id, categories.name, COUNT(*) as count FROM products JOIN categories ON (products.categories_id = categories.id) GROUP BY products.categories_id;`;
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
    ordersData.quantity as order_quantity,
    ordersData.price as order_item_price,
    products.title as product_title,
    products.price as product_current_price,
    payments.mode_of_payment as mode_of_payment,
    customers.id as customer_id,
    orders.id as order_id,
    ordersData.id as ordersData_id,
    products.id as product_id,
    payments.id as payment_id
    FROM ordersData
    JOIN products ON ordersData.product_id = products.id
    JOIN orders ON ordersData.order_id = order_id
    JOIN payments ON orders.id = payments.order_id
    JOIN customers ON orders.customer_id = customers.id
    WHERE customers.id=${id} AND ordersData.product_id = products.id AND orders.id = payments.order_id AND orders.customer_id = customers.id AND orders.id = ordersData.order_id;`;
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
    let command = `SELECT name,location,email,contact_no FROM sellers;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getSellerProducts = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT 
    sellers.name as sellers_name,
    sellers.email as sellers_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity
    FROM sellers 
    JOIN products ON sellers.id = products.sellers_id 
    WHERE sellers.id = ${id} AND sellers.id = products.sellers_id;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getSellerOrders = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT
    sellers.name as sellers_name,
    sellers.email as sellers_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity,
    ordersData.quantity as order_quantity,
    ordersData.price as order_item_price,
    orders.status as order_status
    FROM ordersData
    JOIN orders ON ordersData.order_id = orders.id
    JOIN products ON products.id = ordersData.product_id
    JOIN sellers ON sellers.id = products.sellers_id
    WHERE sellers.id= ${id} AND ordersData.order_id = orders.id AND products.id = ordersData.product_id AND sellers.id = products.sellers_id;`;
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
    let command = `SELECT name,email,contact_no FROM vendors;`;
    sql.query(command, (err, rows, field) => {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

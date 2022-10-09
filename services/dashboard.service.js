import Customer from "../model/customer.model.js";
import Orders from "../model/orders.model.js";
import Seller from "../model/seller.model.js";
import Product from "../model/product.model.js";
import Ordersdata from "../model/ordersdata.model.js";
import Payments from "../model/payment.model.js";
import Category from "../model/category.model.js";

import sql from "./db/db.js";

export default class DashboardService {
  //constructor Dependency Injection
  constructor() {
    this.customerModel = new Customer();
    this.orderModel = new Orders();
    this.sellerModel = new Seller();
    this.productModel = new Product();
    this.ordersdataModel = new Ordersdata();
    this.paymentModel = new Payments();
    this.categoryModel = new Category();
  }

  getOrderList = () => {
    return new Promise((resolve) => {
      let command = `SELECT status, COUNT(*) AS count FROM ${this.orderModel.table_name} GROUP BY status;`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getTotalAvailableProducts = () => {
    return new Promise((resolve) => {
      let command = `SELECT title,id,quantity FROM ${this.productModel.table_name} WHERE quantity > 0;`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getZeroAvailableProducts = () => {
    return new Promise((resolve) => {
      let command = `SELECT title,id,quantity FROM ${this.productModel.table_name} WHERE quantity = 0;`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getCategoryList = () => {
    return new Promise((resolve) => {
      let command = `SELECT ${this.productModel.table_name}.category_id, ${this.categoryModel.table_name}.name, COUNT(*) as count FROM ${this.productModel.table_name} JOIN ${this.categoryModel.table_name} ON (${this.productModel.table_name}.category_id = ${this.categoryModel.table_name}.id) GROUP BY ${this.productModel.table_name}.categories_id;`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getCustomerPersonalProfile = (id) => {
    return new Promise((resolve) => {
      let command = `SELECT
      ${this.model.table_name}.firstname as firstname,
      ${this.model.table_name}.email as email,
      ${this.model.table_name}.contact_no as contact_no,
      ${this.model.table_name}.status as order_status,
      ${this.model.table_name}.modified_at as order_date,
      ${this.model.table_name}.quantity as order_quantity,
      ${this.model.table_name}.price as order_item_price,
      ${this.model.table_name}.title as product_title,
      ${this.model.table_name}.price as product_current_price,
      ${this.model.table_name}.mode_of_payment as mode_of_payment,
      ${this.model.table_name}.id as customer_id,
      ${this.model.table_name}.id as order_id,
      ${this.model.table_name}.id as ordersData_id,
      ${this.model.table_name}.id as product_id,
      ${this.model.table_name}.id as payment_id
      FROM ${this.model.table_name}
      JOIN ${this.model.table_name} ON ${this.model.table_name}.product_id = ${this.model.table_name}.id
      JOIN ${this.model.table_name} ON ${this.model.table_name}.order_id = order_id
      JOIN ${this.model.table_name} ON orders.id = ${this.model.table_name}.order_id
      JOIN ${this.model.table_name} ON orders.customer_id = ${this.model.table_name}.id
      WHERE ${this.model.table_name}.id=${id} AND ${this.model.table_name}.product_id = ${this.model.table_name}.id AND ${this.model.table_name}.id = ${this.model.table_name}.order_id AND ${this.model.table_name}.customer_id = ${this.model.table_name}.id AND ${this.model.table_name}.id = ${this.model.table_name}.order_id;`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getSellerProfile = () => {
    return new Promise((resolve) => {
      let command = `SELECT name,location,email,contact_no FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  getSellerProducts = (id) => {
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

  getSellerOrders = (id) => {
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
}

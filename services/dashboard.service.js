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

  getAvailableProducts = () => {
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

  getCustomerProfile = (id) => {
    return new Promise((resolve) => {
      let command = `SELECT
      ${this.customerModel.table_name}.firstname as firstname,
      ${this.customerModel.table_name}.email as email,
      ${this.customerModel.table_name}.contact_no as contact_no,
      ${this.orderModel.table_name}.status as order_status,
      ${this.orderModel.table_name}.modified_at as order_date,
      ${this.ordersdataModel.table_name}.quantity as order_quantity,
      ${this.ordersdataModel.table_name}.price as order_item_price,
      ${this.productModel.table_name}.title as product_title,
      ${this.productModel.table_name}.price as product_current_price,
      ${this.paymentModel.table_name}.mode_of_payment as mode_of_payment,
      ${this.customerModel.table_name}.id as customer_id,
      ${this.orderModel.table_name}.id as order_id,
      ${this.ordersdataModel.table_name}.id as ordersData_id,
      ${this.productModel.table_name}.id as product_id,
      ${this.paymentModel.table_name}.id as payment_id
      FROM ${this.ordersdataModel.table_name}
      JOIN ${this.productModel.table_name} ON ${this.ordersdataModel.table_name}.product_id = ${this.productModel.table_name}.id
      JOIN ${this.orderModel.table_name} ON ${this.ordersdataModel.table_name}.order_id = order_id
      JOIN ${this.paymentModel.table_name} ON ${this.orderModel.table_name}.id = ${this.paymentModel.table_name}.order_id
      JOIN ${this.customerModel.table_name} ON ${this.orderModel.table_name}.customer_id = ${this.customerModel.table_name}.id
      WHERE ${this.customerModel.table_name}.id=${id} AND ${this.ordersdataModel.table_name}.product_id = ${this.productModel.table_name}.id AND ${this.orderModel.table_name}.id = ${this.paymentModel.table_name}.order_id AND ${this.orderModel.table_name}.customer_id = ${this.customerModel.table_name}.id AND ${this.orderModel.table_name}.id = ${this.ordersdataModel.table_name}.order_id;`;
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
      let command = `SELECT name,location,email,contact_no FROM ${this.sellerModel.table_name};`;
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
      ${this.sellerModel.table_name}.name as seller_name,
      ${this.sellerModel.table_name}.email as seller_email,
      ${this.productModel.table_name}.title as product_title,
      ${this.productModel.table_name}.price as product_price,
      ${this.productModel.table_name}.quantity as product_quantity
      FROM ${this.sellerModel.table_name} 
      JOIN ${this.productModel.table_name} ON ${this.sellerModel.table_name}.id = ${this.productModel.table_name}.seller_id 
      WHERE ${this.sellerModel.table_name}.id = ${id} AND ${this.sellerModel.table_name}.id = ${this.productModel.table_name}.seller_id;`;
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
      ${this.sellerModel.table_name}.name as seller_name,
      ${this.sellerModel.table_name}.email as seller_email,
      ${this.productModel.table_name}.title as product_title,
      ${this.productModel.table_name}.price as product_price,
      ${this.productModel.table_name}.quantity as product_quantity,
      ${this.ordersdataModel.table_name}.quantity as order_quantity,
      ${this.ordersdataModel.table_name}.price as order_item_price,
      ${this.orderModel.table_name}.status as order_status
      FROM  ${this.ordersdataModel.table_name}
      JOIN  ${this.orderModel.table_name} ON  ${this.ordersdataModel.table_name}.order_id =  ${this.orderModel.table_name}.id
      JOIN  ${this.productModel.table_name} ON  ${this.productModel.table_name}.id =  ${this.ordersdataModel.table_name}.product_id
      JOIN  ${this.sellerModel.table_name} ON  ${this.sellerModel.table_name}.id =  ${this.productModel.table_name}.seller_id
      WHERE  ${this.sellerModel.table_name}.id= ${id} AND  ${this.ordersdataModel.table_name}.order_id =  ${this.orderModel.table_name}.id AND  ${this.productModel.table_name}.id =  ${this.ordersdataModel.table_name}.product_id AND  ${this.sellerModel.table_name}.id =  ${this.productModel.table_name}.seller_id;`;
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

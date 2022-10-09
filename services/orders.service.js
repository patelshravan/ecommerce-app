import Orders from "../model/orders.model.js";
import Ordersdata from "../model/ordersdata.model.js";
import Payments from "../model/payment.model.js";
import Product from "../model/product.model.js";
import sql from "./db/db.js";

export default class OrdersService {
  //constructor Dependency Injection
  constructor() {
    this.orderModel = new Orders();
    this.ordersdataModel = new Ordersdata();
    this.paymentsModel = new Payments();
    this.productModel = new Product();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.orderModel.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve({ error: "Unable to fetch orders." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };

  getById = (id) => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.orderModel.table_name} WHERE id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          resolve({ error: "Unable to fetch orders by id." });
        }
        resolve({ data: rows });
      });
    });
  };

  placeOrder = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let orderDataValues = "";
      let productQuantityUpdateQuery = "";
      let amount = 0;
      for (let i = 0; i < data.products.length; i++) {
        let productId = data.products[i].id;
        let productPrice = data.products[i].price;
        let productQuantity = data.products[i].quantity;

        amount += productPrice * productQuantity;

        orderDataValues += `(@order_id, ${productId}, ${productPrice}, ${productQuantity},"${timeStamp}", "${timeStamp}"),`;
        productQuantityUpdateQuery += `UPDATE ${this.productModel.table_name} SET quantity = quantity - ${productQuantity} WHERE id = ${productId};`;
      }
      orderDataValues = orderDataValues.slice(0, -1);
      let payableAmount = amount * (1 - data.discount_percentage);
      let command = `INSERT INTO ${this.orderModel.table_name} (status, customer_id, created_at, modified_at) VALUES ("placed", ${data.customer_id}, "${timeStamp}", "${timeStamp}");
      SET @order_id = LAST_INSERT_ID();
      INSERT INTO ${this.ordersdataModel.table_name} (order_id, product_id, price, quantity, created_at, modified_at) VALUES ${orderDataValues};
      ${productQuantityUpdateQuery}
      INSERT INTO ${this.paymentsModel.table_name} (total_amount, discount_percentage,payable_amount,mode_of_payment, order_id, created_at, modified_at) VALUES (${amount}, ${data.discount_percentage} ,${payableAmount}, "${data.payment_mode}", @order_id, "${timeStamp}", "${timeStamp}");`;

      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to place order." });
        } else {
          resolve({ message: "Inserted!" });
        }
      });
    });
  };

  delete = (id) => {
    return new Promise((resolve) => {
      let command = `DELETE FROM ${this.orderModel.table_name} Where id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to delete a order." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };

  update = (id, data) => {
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.orderModel.table_name} SET quantity="${data.quantity}", modified_at="${timeStamp}" WHERE id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          onsole.log(err);
          resolve({ error: "Unable to update a order." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

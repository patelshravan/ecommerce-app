import Orders from "../model/orders.model.js";
import Payments from "../model/payment.model.js";
import sql from "./db/db.js";

export default class PaymentService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Payments();
    this.ordersModel = new Orders();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          throw err;
        } else {
          resolve({ data: rows });
        }
      });
    });
  };

  getById = (id) => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name} WHERE id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        }
        resolve({ data: rows });
      });
    });
  };

  post = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.model.table_name}(total_amount,discount_percentage,payable_amount,order_id,mode_of_payment,created_at,modified_at) values("${data.total_amount}","${data.discount_percentage}","${data.payable_amount}",${data.order_id},${data.mode_of_payment},"${timeStamp}","${timeStamp}");
      UPDATE ${this.ordersModel.table_name} SET paid = true; WHERE id=${data.order_id}`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        }
        resolve({ data: rows });
      });
    });
  };

  delete = (id) => {
    return new Promise((resolve) => {
      let command = `DELETE FROM ${this.model.table_name} Where id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ data: rows });
        }
      });
    });
  };

  update = (id, data) => {
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.model.table_name} SET quantity="${data.quantity}", modified_at="${timeStamp}" WHERE id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

import Ordersdata from "../model/ordersdata.model.js";
import sql from "../model/db.js";

export default class OrdersService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Ordersdata();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve({ error: "Unable to fetch ordersdata." });
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
          resolve({ error: "Unable to fetch ordersdata by id." });
        }
        resolve({ data: rows });
      });
    });
  };

  insert = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ordersData(quantity,price,order_id,product_id,created_at,modified_at) values("${data.quantity}","${data.price}","${data.order_id}","${data.product_id}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to insert ordersdata." });
        } else {
          resolve({ message: "Inserted!" });
        }
      });
    });
  };

  delete = (id) => {
    return new Promise((resolve) => {
      let command = `DELETE FROM ${this.model.table_name} Where id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to delete a ordersdata." });
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
          onsole.log(err);
          resolve({ error: "Unable to update a ordersdata." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

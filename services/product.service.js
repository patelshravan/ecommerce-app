import Product from "../model/product.model.js";
import sql from "./db/db.js";

export default class ProductService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Product();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve({ error: "Unable to fetch products." });
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
          resolve({ error: "Unable to fetch products by id." });
        }
        resolve({ data: rows });
      });
    });
  };

  post = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.model.table_name}(title,description,image_url,quantity,price,category_id,seller_id,created_at,modified_at) values("${data.title}","${data.description}","${data.image_url}",${data.quantity},${data.price},${data.category_id},${data.seller_id},"${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log("Adding Product Err:", err);
          resolve({ error: "Unable to insert a product." });
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
          console.log(err);
          resolve({ error: "Unable to delete a product." });
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
          resolve({ error: "Unable to update a product." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

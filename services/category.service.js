import Category from "../model/category.model.js";
import sql from "./db/db.js";

export default class CategoryService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Category();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve({ error: "Unable to fetch categories." });
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
          resolve({ error: "Unable to fetch categories by id." });
        }
        resolve({ data: rows });
      });
    });
  };

  post = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.model.table_name}(order_id,location,vendor_id,created_at,modified_at) values("${data.order_id}","${data.location}","${data.vendor_id}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log("Adding Category Err:", err);
          resolve({ error: "Unable to insert a category." });
        }
        resolve({ data: rows });
      });
    });
  };

  update = (id, data) => {
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.model.table_name} SET contact_no="${data.contact_no}", modified_at="${timeStamp}" WHERE id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to update a categories." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

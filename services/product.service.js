import Product from "../model/product.model.js";
import sql from "../model/db.js";

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
}

import Vendor from "../model/vendor.model.js";
import sql from "../model/db.js";

export default class VendorService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Vendor();
  }

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name};`;
      sql.query(command, (err, rows, field) => {
        if (err) {
          resolve({ error: "Unable to fetch vendors." });
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
          resolve({ error: "Unable to fetch vendor by id." });
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
          resolve({ error: "Unable to update a vendor." });
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

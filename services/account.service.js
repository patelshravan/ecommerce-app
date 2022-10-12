import Accounts from "../model/account.model.js";
import sql from "./db/db.js";

export default class AccountsService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Accounts();
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

  getByNumber = (req) => {
    return new Promise((resolve) => {
      let accountNumber = req.params.accountnumber;
      console.log(req.params.accountnumber);
      let command = `SELECT * FROM ${this.model.table_name} WHERE account_number="${accountNumber}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        }
        resolve({ data: rows });
      });
    });
  };

  getByUserId = (id) => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM ${this.model.table_name} WHERE user_id="${id}"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
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
          throw err;
        } else {
          resolve({ data: rows });
        }
      });
    });
  };
}

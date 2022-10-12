import Transactions from "../model/transaction.model.js";
import sql from "./db/db.js";

export default class TransactionService {
  //constructor Dependency Injection
  constructor() {
    this.model = new Transactions();
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

  makeTransfer = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `CALL FundsTransfer(${data.amount}, ${data.from_account}, ${data.to_account}, "${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        }
        resolve({ data: rows });
      });
    });
  };
}

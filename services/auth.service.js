import User from "../model/user.model.js";
import sql from "./db/db.js";
import Customer from "../model/customer.model.js";
import Seller from "../model/seller.model.js";
import Vendor from "../model/vendor.model.js";
import Staff from "../model/staff.model.js";

import jwt from "jsonwebtoken";
import secret from "../config.js";

export default class AuthService {
  //constructor Dependency Injection
  constructor() {
    this.userModel = new User();
    this.customerModel = new Customer();
    this.sellerModel = new Seller();
    this.vendorModel = new Vendor();
    this.staffModel = new Staff();
  }

  customerLogin = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      console.log("data", data);
      let command = `SELECT email FROM ${this.userModel.table_name} WHERE email="${data.email}" AND password="${data.password}" AND user_type="customer"`;
      sql.query(command, (err, rows, fields) => {
        let userData = {
          time: Date(),
          email: data.email,
        };

        if (err) {
          throw err;
        }
        let allUsersStr = JSON.stringify(rows);
        var allUsers = JSON.parse(allUsersStr);
        if (allUsers.length > 0) {
          let token = jwt.sign(userData, secret.jwtSecretKey, {
            expiresIn: 72 * 3600,
          });
          userData.token = token;
          console.log("Login Successful:", userData);
          resolve({ message: "Login Success" });
        } else {
          throw "Invalid User";
        }
      });
    });
  };

  customerRegister = (req, res) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.userModel.table_name}(email,password,user_type) VALUES ("${data.email}","${data.password}","customer");
      SET @userId = LAST_INSERT_ID();
      INSERT INTO ${this.customerModel.table_name}(user_id,firstname,lastname,contact_no, location, created_at, modified_at) values(@userId,"${data.firstname}","${data.lastname}","${data.contact_no}","${data.location}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Customer Registered!" });
        }
      });
    });
  };

  updateCustomerPassword = (req, res) => {
    let user = req.user;
    let password = req.body.password;
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.userModel.table_name} SET password="${password}", modified_at="${timeStamp}" WHERE email="${user.email}" AND user_type="customer"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Password Updated!" });
        }
      });
    });
  };
  // Seller

  sellerLogin = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      console.log("data", data);
      let command = `SELECT email FROM ${this.userModel.table_name} WHERE email="${data.email}" AND password="${data.password}" AND user_type="seller"`;
      sql.query(command, (err, rows, fields) => {
        let userData = {
          time: Date(),
          email: data.email,
        };

        if (err) {
          throw err;
        }
        let allUsersStr = JSON.stringify(rows);
        var allUsers = JSON.parse(allUsersStr);
        if (allUsers.length > 0) {
          let token = jwt.sign(userData, secret.jwtSecretKey, {
            expiresIn: 72 * 3600,
          });
          userData.token = token;
          console.log("Login Successful:", userData);
          resolve(userData);
        } else {
          throw "Invalid User";
        }
      });
    });
  };

  sellerRegister = (req, res) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.userModel.table_name}(email,password,user_type) VALUES ("${data.email}","${data.password}","seller");
      SET @userId = LAST_INSERT_ID();
      INSERT INTO ${this.sellerModel.table_name}(user_id,name,contact_no, location, created_at, modified_at) values(@userId,"${data.name}","${data.contact_no}","${data.location}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Seller Registered!" });
        }
      });
    });
  };

  updateSellerPassword = (req, res) => {
    let user = req.user;
    let password = req.body.password;
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.userModel.table_name} SET password="${password}", modified_at="${timeStamp}" WHERE email="${user.email}" AND user_type="seller"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Password Updated!" });
        }
      });
    });
  };

  // Vendor
  vendorLogin = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      console.log("data", data);
      let command = `SELECT email FROM ${this.userModel.table_name} WHERE email="${data.email}" AND password="${data.password}" AND user_type="vendor"`;
      sql.query(command, (err, rows, fields) => {
        let userData = {
          time: Date(),
          email: data.email,
        };

        if (err) {
          throw err;
        }
        let allUsersStr = JSON.stringify(rows);
        var allUsers = JSON.parse(allUsersStr);
        if (allUsers.length > 0) {
          let token = jwt.sign(userData, secret.jwtSecretKey, {
            expiresIn: 72 * 3600,
          });
          userData.token = token;
          console.log("Login Successful:", userData);
          resolve(userData);
        } else {
          throw "Invalid User";
        }
      });
    });
  };

  vendorRegister = (req, res) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.userModel.table_name}(email,password,user_type) VALUES ("${data.email}","${data.password}","vendor");
      SET @userId = LAST_INSERT_ID();
      INSERT INTO ${this.vendorModel.table_name}(user_id,name,contact_no, created_at, modified_at) values(@userId,"${data.name}","${data.contact_no}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Vendor Registered!" });
        }
      });
    });
  };

  updateVendorPassword = (req, res) => {
    let user = req.user;
    let password = req.body.password;
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.userModel.table_name} SET password="${password}", modified_at="${timeStamp}" WHERE email="${user.email}" AND user_type="vendor"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Password Updated!" });
        }
      });
    });
  };

  // Staff
  staffLogin = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      console.log("data", data);
      let command = `SELECT email FROM ${this.userModel.table_name} WHERE email="${data.email}" AND password="${data.password}" AND user_type="staff"`;
      sql.query(command, (err, rows, fields) => {
        let userData = {
          time: Date(),
          email: data.email,
        };

        if (err) {
          throw err;
        }
        let allUsersStr = JSON.stringify(rows);
        var allUsers = JSON.parse(allUsersStr);
        if (allUsers.length > 0) {
          let token = jwt.sign(userData, secret.jwtSecretKey, {
            expiresIn: 72 * 3600,
          });
          userData.token = token;
          console.log("Login Successful:", userData);
          resolve(userData);
        } else {
          throw "Invalid User";
        }
      });
    });
  };

  staffRegister = (req, res) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `INSERT INTO ${this.userModel.table_name}(email,password,user_type) VALUES ("${data.email}","${data.password}","staff");
      SET @userId = LAST_INSERT_ID();
      INSERT INTO ${this.staffModel.table_name}(user_id,firstname,lastname,contact_no,empid, created_at, modified_at) values(@userId,"${data.firstname}","${data.lastname}","${data.contact_no}","${data.empid}","${timeStamp}","${timeStamp}");`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Staff Registered!" });
        }
      });
    });
  };

  updateStaffPassword = (req, res) => {
    let user = req.user;
    let password = req.body.password;
    return new Promise((resolve) => {
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let command = `UPDATE ${this.userModel.table_name} SET password="${password}", modified_at="${timeStamp}" WHERE email="${user.email}" AND user_type="staff"`;
      sql.query(command, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          resolve({ message: "Password Updated!" });
        }
      });
    });
  };
}

import config from "../config.js";
import jwt from "jsonwebtoken";

export default class AuthController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  //   Customers Authentication
  customerLogin = async (req, res) => {
    console.log("Customer Login");
    let result = await this.repoManager.customerLogin(req);
    res.send(result.data);
  };

  customerRegister = async (req, res) => {
    console.log("Customer Login");
    let result = await this.repoManager.customerRegister(req);
    res.send(result.data);
  };

  updateCustomerPassword = async (req, res) => {
    console.log("Update Customer Password");
    let result = await this.repoManager.updateCustomerPassword(req);
    res.send(result.data);
  };
  // Sellers Authentication

  sellerLogin = async (req, res) => {
    console.log("seller Login");
    let result = await this.repoManager.sellerLogin(req);
    res.send(result.data);
  };

  sellerRegister = async (req, res) => {
    console.log("seller Login");
    let result = await this.repoManager.sellerRegister(req);
    res.send(result.data);
  };

  vupdateSellerPassword = async (req, res) => {
    console.log("Update Seller Password");
    let result = await this.repoManager.updateSellerPassword(req);
    res.send(result.data);
  };

  //   Vendor Authentication

  vendorLogin = async (req, res) => {
    console.log("vendor Login");
    let result = await this.repoManager.vendorLogin(req);
    res.send(result.data);
  };

  vendorRegister = async (req, res) => {
    console.log("vendor Login");
    let result = await this.repoManager.vendorRegister(req);
    res.send(result.data);
  };

  updateVendorPassword = async (req, res) => {
    console.log("Update Vendor Password");
    let result = await this.repoManager.updateVendorPassword(req);
    res.send(result.data);
  };

  //   Staff Authentication

  staffLogin = async (req, res) => {
    console.log("staff Login");
    let result = await this.repoManager.staffLogin(req);
    res.send(result.data);
  };

  staffRegister = async (req, res) => {
    console.log("staff Login");
    let result = await this.repoManager.staffRegister(req);
    res.send(result.data);
  };

  updateStaffPassword = async (req, res) => {
    console.log("Update Staff Password");
    let result = await this.repoManager.updateStaffPassword(req);
    res.send(result.data);
  };

  // JWT VERIFY FUNCTION
  verifyjwttoken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json("Unauthorize user");
    try {
      const decoded = jwt.verify(token, config.jwtSecretKey);
      req.user = decoded;
      console.log("Validation Successful");
      next();
    } catch (e) {
      res.status(400).json("Token not valid");
    }
  };
}

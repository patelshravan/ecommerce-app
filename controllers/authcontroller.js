const dal = require("../model/authDal");
const config = require("../config");
const jwt = require("jsonwebtoken");
// Customers
exports.customer_login = async (req, res) => {
  let data = [];
  console.log("inside cust login function");
  data = await dal.customer_login(req);
  res.send(data);
};

exports.customer_register = async (req, res) => {
  let data = [];
  data = await dal.customer_register(req);
  res.send(data);
};

// Seller
exports.seller_login = async (req, res) => {
  let data = [];
  data = await dal.seller_login(req);
  res.send(data);
};

exports.seller_register = async (req, res) => {
  let data = [];
  data = await dal.seller_register(req);
  res.send(data);
};

// Staff
exports.staff_login = async (req, res) => {
  let data = [];
  data = await dal.staff_login(req);
  res.send(data);
};

exports.staff_register = async (req, res) => {
  let data = [];
  data = await dal.staff_register(req);
  res.send(data);
};

// vendors
exports.vendors_login = async (req, res) => {
  let data = [];
  data = await dal.vendor_login(req);
  res.send(data);
};

exports.vendors_register = async (req, res) => {
  let data = [];
  data = await dal.vendor_register(req);
  res.send(data);
};

// JWT VERIFY FUNCTION
exports.verifyjwttoken = (req, res, next) => {
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

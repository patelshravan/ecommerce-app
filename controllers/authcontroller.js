const dal = require("../model/authDal");

// Customers
exports.customer_login = async (req, res) => {
  let data = [];
  console.log("inside cust login function");
  data = await dal.customer_login(req);
  if (data.error) {
    res.render("../views/errorpage", data);
  } else {
    res.render("../views/home", data);
  }
};

exports.loginPage = async (req, res) => {
  res.render("../views/customerlogin");
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
  data = await dal.vendors_login(req);
  res.send(data);
};

exports.vendors_register = async (req, res) => {
  let data = [];
  data = await dal.vendors_register(req);
  res.send(data);
};

const dal = require("../model/auth_dal");

// Customers
exports.customer_login = async (req, res) => {
  let data = [];
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

// Vendor
exports.vendor_login = async (req, res) => {
  let data = [];
  data = await dal.vendor_login(req);
  res.send(data);
};

exports.vendor_register = async (req, res) => {
  let data = [];
  data = await dal.vendor_register(req);
  res.send(data);
};

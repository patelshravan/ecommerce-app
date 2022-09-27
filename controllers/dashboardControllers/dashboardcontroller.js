const dal = require("../../model/dashboard_dal/dashboard");

exports.getOrderList = async (req, res) => {
  let data = [];
  data = await dal.getOrderList();
  res.send(data);
};

exports.getAvailableProducts = async (req, res) => {
  let data = [];
  data = await dal.getTotalAvailableProducts();
  res.send(data);
};

exports.getZeroProductAvailable = async (req, res) => {
  let data = [];
  data = await dal.getZeroAvailableProducts();
  res.send(data);
};

exports.getCategoryList = async (req, res) => {
  let data = [];
  data = await dal.getCategoryList();
  res.send(data);
};

exports.getCustomerProfile = async (req, res) => {
  let data = [];
  data = await dal.getCustomerPersonalProfile(req.params.id);
  res.send(data);
};

exports.getSellerProfile = async (req, res) => {
  let data = [];
  data = await dal.getSellerPersonalInfo();
  res.send(data);
};

exports.getSellerProducts = async (req, res) => {
  let data = [];
  data = await dal.getSellerProducts(req.params.id);
  res.send(data);
};

exports.getSellerOrders = async (req, res) => {
  let data = [];
  data = await dal.getSellerOrders(req.params.id);
  res.send(data);
};

exports.getStaffInfo = async (req, res) => {
  let data = [];
  data = await dal.getStaffPersonalInfo();
  res.send(data);
};

exports.getVendorInfo = async (req, res) => {
  let data = [];
  data = await dal.getVendorPersonalInfo();
  res.send(data);
};

const dal = require("../model/cartDal");

exports.getAll = async (req, res) => {
  let data = [];
  data = await dal.getAllShoppingCartDetails();
  res.send(data);
};

exports.getById = async (req, res) => {
  let data = [];
  data = await dal.getById(req.params.id);
  res.send(data);
};

exports.insert = async (req, res) => {
  let result = [];
  result = await dal.insert(req);
  res.send(result);
};

exports.update = async (req, res) => {
  let result = [];
  result = await dal.update(req.params.id, req.body);
  res.send(result);
};

exports.remove = async (req, res) => {
  let result = [];
  result = await dal.remove(req.params.id);
  res.send(result);
};

const dal = require("../model/productsDal");

exports.getAll = async (req, res) => {
  // let data = [];
  let data = req.body;
  data = await dal.getAllProducts();
  if (data.error) {
    res.render("../views/errorpage", data);
  } else {
    res.render("../views/products", data);
  }
};

exports.productPage = async (req, res) => {
  res.render("../views/products");
};

exports.getById = async (req, res) => {
  let data = [];
  data = await dal.getProductById(req.params.id);
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

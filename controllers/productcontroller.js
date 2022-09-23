const dal = require("../model/dal");

exports.getAll = async (req, res) => {
  let data = [];
  data = await dal.getAllProducts();
  res.send(data);
};

exports.getById = async (req, res) => {
  let data = [];
  data = await dal.getProductById(req.params.id);
  res.send(data);
};

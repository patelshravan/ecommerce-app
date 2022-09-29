const dal = require("../model/cartDal");

exports.getAll = async (req, res) => {
  let data = [];
  data = await dal.getAllCartDetails(req);
  res.send(data);
};

exports.addToCart = async (req, res) => {
  let data = [];
  data = await dal.addToCart(req);
  res.send(data);
};

exports.removeFromCart = async (req, res) => {
  let data = [];
  data = await dal.removeFromCart(req.params.id);
  res.send(data);
};

exports.checkout = async (req, res) => {
  let data = [];
  data = await dal.checkout(req);
  res.send(data);
};

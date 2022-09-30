const dal = require("../model/customersDal");

exports.getAll = async (req, res) => {
  // let data = [];
  let data = req.body;
  data = await dal.getAllCustomers();
  if (data.error) {
    res.render("../views/errorpage", data);
  } else {
    res.render("../views/customerprofile", data);
  }
};

exports.customerPage = async (req, res) => {
  res.render("../views/customerprofile");
};

exports.getById = async (req, res) => {
  let data = [];
  data = await dal.getById(req.params.id);
  res.send(data);
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

const dal = require("../model/dal");

exports.getAll = async (req, res) => {
  let data = [];
  data = await dal.getAllProducts();
  res.send(data);
};

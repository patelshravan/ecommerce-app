const userController = require("./controllers/usercontroller");
const productController = require("./controllers/productcontroller");

module.exports = function (app) {
  app.route("/api/customers").get(userController.getAll);
  app.route("/api/products").get(productController.getAll);
};

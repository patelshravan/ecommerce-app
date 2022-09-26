const customerController = require("./controllers/customercontroller");
const productController = require("./controllers/productcontroller");
const authController = require("./controllers/authcontroller");
const sellerController = require("./controllers/sellercontroller");
const staffController = require("./controllers/staffcontroller");
const ordersController = require("./controllers/orderscontroller");
const ordersDataController = require("./controllers/orders_datacontroller");
const paymentsController = require("./controllers/paymentscontroller");
const feedbackController = require("./controllers/feedbackcontroller");
const vendorController = require("./controllers/vendorcontroller");
const deliveryController = require("./controllers/deliverycontroller");
const shoppingCartController = require("./controllers/shopping_cartcontroller");

module.exports = function (app) {
  // Customer Authentication
  app.route("/api/customer/login").post(authController.customer_login);
  app.route("/api/customer/register").post(authController.customer_register);

  // Seller Authentication
  app.route("/api/seller/login").post(authController.seller_login);
  app.route("/api/seller/register").post(authController.seller_register);

  // Staff Authentication
  app.route("/api/staff/login").post(authController.staff_login);
  app.route("/api/staff/register").post(authController.staff_register);

  // Vendor Authentication
  app.route("/api/vendor/login").post(authController.vendor_login);
  app.route("/api/vendor/register").post(authController.vendor_register);

  // Products
  app.route("/api/products").get(productController.getAll);
  app
    .route("/api/products/:id")
    .get(productController.getById)
    .delete(productController.remove)
    .put(productController.update);

  // Customers
  app.route("/api/customers").get(customerController.getAll);
  app
    .route("/api/customers/:id")
    .get(customerController.getById)
    .delete(customerController.remove)
    .put(customerController.update);

  // Seller
  app.route("/api/seller").get(sellerController.getAll);
  app
    .route("/api/seller/:id")
    .get(sellerController.getById)
    .delete(sellerController.remove)
    .put(sellerController.update);

  // Staff
  app.route("/api/staff").get(staffController.getAll);
  app
    .route("/api/staff/:id")
    .get(staffController.getById)
    .delete(staffController.remove)
    .put(staffController.update);

  // Orders
  app.route("/api/orders").get(ordersController.getAll);
  app
    .route("/api/orders/:id")
    .get(ordersController.getById)
    .post(ordersController.insert)
    .delete(ordersController.remove)
    .put(ordersController.update);

  // Orders_data
  app.route("/api/orders_data").get(ordersDataController.getAll);
  app
    .route("/api/orders_data/:id")
    .get(ordersDataController.getById)
    .post(ordersDataController.insert)
    .delete(ordersDataController.remove)
    .put(ordersDataController.update);

  // Payments
  app.route("/api/payments").get(paymentsController.getAll);
  app
    .route("/api/payments/:id")
    .get(paymentsController.getById)
    .post(paymentsController.insert)
    .delete(paymentsController.remove)
    .put(paymentsController.update);

  // Feedback
  app.route("/api/feedback").get(feedbackController.getAll);
  app
    .route("/api/feedback/:id")
    .get(feedbackController.getById)
    .post(feedbackController.insert)
    .delete(feedbackController.remove)
    .put(feedbackController.update);

  // Vendor
  app.route("/api/vendor").get(vendorController.getAll);
  app
    .route("/api/vendor/:id")
    .get(vendorController.getById)
    .delete(vendorController.remove)
    .put(vendorController.update);

  // Delivery
  app.route("/api/delivery").get(deliveryController.getAll);
  app
    .route("/api/delivery/:id")
    .get(deliveryController.getById)
    .post(deliveryController.insert)
    .delete(deliveryController.remove)
    .put(deliveryController.update);

  // Shopping Cart
  app.route("/api/shoppingcart_details").get(shoppingCartController.getAll);
  app
    .route("/api/shoppingcart/:id")
    .get(shoppingCartController.getById)
    .post(shoppingCartController.insert)
    .delete(shoppingCartController.remove)
    .put(shoppingCartController.update);
};

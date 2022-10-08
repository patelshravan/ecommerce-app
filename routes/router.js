const customerController = require("../controllers/customercontroller");
const productController = require("../controllers/productcontroller");
const authController = require("../controllers/authcontroller");
const sellerController = require("../controllers/sellercontroller");
const staffController = require("../controllers/staffcontroller");
const ordersController = require("../controllers/orderscontroller");
const ordersDataController = require("../controllers/ordersdatacontroller");
const paymentsController = require("../controllers/paymentscontroller");
const feedbackController = require("../controllers/feedbackcontroller");
const vendorController = require("../controllers/vendorcontroller");
const deliveryController = require("../controllers/deliverycontroller");
const cartController = require("../controllers/cartcontroller");
const dashboardController = require("../controllers/dashboardControllers/dashboardcontroller");

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
  app.route("/api/vendor/login").post(authController.vendors_login);
  app.route("/api/vendor/register").post(authController.vendors_register);

  // Products
  app
    .route("/api/products")
    .get(productController.getAll)
    .post(productController.insert);
  app
    .route("/api/products/:id")
    .get(productController.getById)
    .delete(productController.remove)
    .put(productController.update);

  // Customers
  app.route("/api/customers").get(customerController.getAll);
  app
    .route("/api/customers/:id")
    .get(authController.verifyjwttoken, customerController.getById)
    .delete(customerController.remove)
    .put(customerController.update);
  app
    .route("/api/updatepassword/customer")
    .put(authController.verifyjwttoken, customerController.updatePassword);

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
    .delete(ordersController.remove)
    .put(ordersController.update);

  app.route("/api/orders/placeorder").post(ordersController.placeOrder);

  // Orders_data
  app
    .route("/api/ordersdata")
    .get(ordersDataController.getAll)
    .post(ordersDataController.insert);
  app
    .route("/api/ordersdata/:id")
    .get(ordersDataController.getById)
    .delete(ordersDataController.remove)
    .put(ordersDataController.update);

  // Payments
  app
    .route("/api/payments")
    .get(paymentsController.getAll)
    .post(paymentsController.insert);
  app
    .route("/api/payments/:id")
    .get(paymentsController.getById)
    .delete(paymentsController.remove)
    .put(paymentsController.update);

  // Feedback
  app
    .route("/api/feedback")
    .get(feedbackController.getAll)
    .post(feedbackController.insert);
  app
    .route("/api/feedback/:id")
    .get(feedbackController.getById)
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
  app
    .route("/api/delivery")
    .get(deliveryController.getAll)
    .post(deliveryController.insert);
  app
    .route("/api/delivery/:id")
    .get(deliveryController.getById)
    .delete(deliveryController.remove)
    .put(deliveryController.update);

  // Shopping Cart
  app.route("/api/cart").get(cartController.getAll);
  app.route("/api/cart/add").post(cartController.addToCart);
  app.route("/api/cart/remove/:id").delete(cartController.removeFromCart);
  app
    .route("/api/checkout")

    .get(cartController.checkout);

  // JWT

  app.route("/api/test/jwt").get(authController.verifyjwttoken);

  // Dashboard APIs
  app.route("/api/dashboard/orderlist").get(dashboardController.getOrderList); // get orders list
  app
    .route("/api/dashboard/availableproducts")
    .get(dashboardController.getAvailableProducts); // get all available products
  app
    .route("/api/dashboard/unavailableproducts")
    .get(dashboardController.getZeroProductAvailable); // get unavailable products
  app
    .route("/api/dashboard/categorylist")
    .get(dashboardController.getCategoryList); // list categories
  app
    .route("/api/dashboard/customerprofile/:id")
    .get(dashboardController.getCustomerProfile); // get customer's information including orders,payaments,etc
  app
    .route("/api/dashboard/sellerprofile")
    .get(dashboardController.getSellerProfile); // get seller's personal information

  app
    .route("/api/dashboard/sellerproducts/:id")
    .get(dashboardController.getSellerProducts); // get all sellers products

  app
    .route("/api/dashboard/sellerorders/:id")
    .get(dashboardController.getSellerOrders); // get all sellers sold products

  app
    .route("/api/dashboard/vendorprofile")
    .get(dashboardController.getVendorsInfo); // get vendor's personal information
};

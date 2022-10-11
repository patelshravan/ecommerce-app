import DashboardController from "../controllers/dashboardControllers/dashboard.controller.js";
import DashboardService from "../services/dashboard.service.js";

export default function (app) {
  let dashboardmgr = new DashboardService();
  let controller = new DashboardController(dashboardmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/orderlist", controller.getOrderList);
  app.get("/api/availableproducts", controller.getAvailableProducts);
  app.get("/api/unavailableproducts", controller.getZeroAvailableProducts);
  app.get("/api/categorylist", controller.getCategoryList);
  app.get("/api/customerprofile/:id", controller.getCustomerProfile);
  app.get("/api/sellerprofile/:id", controller.getSellerProfile);
  app.get("/api/sellerorders/:id", controller.getSellerOrders);
  app.get("/api/sellerproducts/:id", controller.getSellerProducts);
  app.get(
    "/api/products/categories/:name",
    controller.getProductsByCategoryName
  );
  app.get("/api/customers/order/:id", controller.getCustomersOrdersByOrderId);
}

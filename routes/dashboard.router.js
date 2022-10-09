import DashboardController from "../controllers/dashboardControllers/dashboard.controller.js";
import DashboardService from "../services/dashboard.service.js";

export default function (app) {
  let dashboardmgr = new DashboardService();
  let controller = new DashboardController(dashboardmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/orderlist", controller.getOrderList);
  app.get("/api/getavailableproducts", controller.getAvailableProducts);
  app.get("/api/getunavailableproducts", controller.getZeroAvailableProducts);
  app.get("/api/categorylist", controller.getCategoryList);
  app.get("/api/customerprofile", controller.getCustomerProfile);
  app.get("/api/sellerprofile", controller.getSellerProfile);
  app.get("/api/sellerprofile", controller.getSellerOrders);
  app.get("/api/sellerprofile", controller.getSellerProducts);
}

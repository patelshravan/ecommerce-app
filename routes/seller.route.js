import SellerController from "../controllers/seller.controller.js";
import AuthController from "../controllers/auth.controller.js";
import CustomerService from "../services/customer.service.js";

export default function (app) {
  let mgr = new CustomerService();
  let controller = new SellerController(mgr);
  let authcontroller = new AuthController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/sellers", controller.get);
  app.get("/api/sellers/:id", controller.getById);
  app.put("/api/sellers/:id", controller.update);

  // Seller Auth
  app.post("/api/customer/login", authcontroller.sellerLogin);
  app.post("/api/customer/login", authcontroller.sellerRegister);
  app.put("/api/product/:id", authcontroller.updateSellerPassword);
}

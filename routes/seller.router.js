import SellerController from "../controllers/seller.controller.js";
import AuthController from "../controllers/auth.controller.js";
import CustomerService from "../services/customer.service.js";

export default function (app) {
  let mgr = new CustomerService();
  let controller = new SellerController(mgr);
  let authcontroller = new AuthController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/seller", controller.get);
  app.get("/api/seller/:id", controller.getById);
  app.put("/api/seller/:id", controller.update);

  // Seller Auth
  app.post("/api/seller/login", authcontroller.sellerLogin);
  app.post("/api/seller/register", authcontroller.sellerRegister);
  app.put("/api/seller/:id", authcontroller.updateSellerPassword);
}

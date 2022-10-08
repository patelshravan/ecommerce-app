import SellerController from "../controllers/seller.controller.js";
import AuthController from "../controllers/auth.controller.js";
import SellerServices from "../services/seller.service.js";
import AuthService from "../services/auth.service.js";

export default function (app) {
  let sellermgr = new SellerServices();
  let authmgr = new AuthService();
  let controller = new SellerController(sellermgr);
  let authcontroller = new AuthController(authmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/seller", controller.get);
  app.get("/api/seller/:id", controller.getById);
  app.put("/api/seller/:id", controller.update);

  // Seller Auth
  app.post("/api/seller/login", authcontroller.sellerLogin);
  app.post("/api/seller/register", authcontroller.sellerRegister);
  app.put("/api/seller/:id", authcontroller.updateSellerPassword);
}

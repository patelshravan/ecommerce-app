import VendorController from "../controllers/vendor.controller.js";
import AuthController from "../controllers/auth.controller.js";
import CustomerService from "../services/customer.service.js";

export default function (app) {
  let mgr = new CustomerService();
  let controller = new VendorController(mgr);
  let authcontroller = new AuthController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/vendor", controller.get);
  app.get("/api/vendor/:id", controller.getById);
  app.put("/api/vendor/:id", controller.update);

  // Customer Auth
  app.post("/api/vendor/login", authcontroller.vendorLogin);
  app.post("/api/vendor/register", authcontroller.vendorRegister);
  app.put("/api/vendor/:id", authcontroller.updateVendorPassword);
}

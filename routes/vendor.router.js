import VendorController from "../controllers/vendor.controller.js";
import AuthController from "../controllers/auth.controller.js";
import VendorServices from "../services/vendor.service.js";
import AuthService from "../services/auth.service.js";

export default function (app) {
  let vendormgr = new VendorServices();
  let authmgr = new AuthService();
  let controller = new VendorController(vendormgr);
  let authcontroller = new AuthController(authmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/vendor", controller.get);
  app.get("/api/vendor/:id", controller.getById);
  app.put("/api/vendor/:id", controller.update);

  // Customer Auth
  app.post("/api/vendor/login", authcontroller.vendorLogin);
  app.post("/api/vendor/register", authcontroller.vendorRegister);
  app.put("/api/vendor/:id", authcontroller.updateVendorPassword);
}

import CustomerController from "../controllers/customer.controller.js";
import AuthController from "../controllers/auth.controller.js";
import CustomerService from "../services/customer.service.js";
import AuthService from "../services/auth.service.js";

export default function (app) {
  let customermgr = new CustomerService();
  let authtomermgr = new AuthService();
  let controller = new CustomerController(customermgr);
  let authcontroller = new AuthController(authtomermgr);

  //Map controller callback functions for rest API routes
  app.get("/api/customer", controller.get);
  app.get("/api/customer/:id", controller.getById);
  app.put("/api/customer/:id", controller.update);

  // Customer Auth
  app.post("/api/customer/login", authcontroller.customerLogin);
  app.post("/api/customer/register", authcontroller.customerRegister);
  app.put("/api/product/:id", authcontroller.updateCustomerPassword);
}

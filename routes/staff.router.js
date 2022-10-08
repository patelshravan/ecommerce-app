import StaffController from "../controllers/staff.controller.js";
import AuthController from "../controllers/auth.controller.js";
import CustomerService from "../services/customer.service.js";

export default function (app) {
  let mgr = new CustomerService();
  let controller = new StaffController(mgr);
  let authcontroller = new AuthController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/staff", controller.get);
  app.get("/api/staff/:id", controller.getById);
  app.put("/api/staff/:id", controller.update);

  // Customer Auth
  app.post("/api/staff/login", authcontroller.staffLogin);
  app.post("/api/staff/register", authcontroller.staffRegister);
  app.put("/api/staff/:id", authcontroller.updateStaffPassword);
}

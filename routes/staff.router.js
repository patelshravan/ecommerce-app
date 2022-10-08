import StaffController from "../controllers/staff.controller.js";
import AuthController from "../controllers/auth.controller.js";
import StaffService from "../services/staff.service.js";
import AuthService from "../services/auth.service.js";

export default function (app) {
  let staffmgr = new StaffService();
  let authmgr = new AuthService();
  let controller = new StaffController(staffmgr);
  let authcontroller = new AuthController(authmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/staff", controller.get);
  app.get("/api/staff/:id", controller.getById);
  app.put("/api/staff/:id", controller.update);

  // Customer Auth
  app.post("/api/staff/login", authcontroller.staffLogin);
  app.post("/api/staff/register", authcontroller.staffRegister);
  app.put("/api/staff/:id", authcontroller.updateStaffPassword);
}

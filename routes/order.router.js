import OrdersController from "../controllers/orders.controller.js";
import CustomerService from "../services/customer.service.js";

export default function (app) {
  let mgr = new CustomerService();
  let controller = new OrdersController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/orders", controller.get);
  app.get("/api/orders/:id", controller.getById);
  app.put("/api/orders/:id", controller.update);
  app.delete("/api/orders/:id", controller.delete);
}

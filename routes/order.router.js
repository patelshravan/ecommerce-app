import OrdersController from "../controllers/orders.controller.js";
import OrdersService from "../services/orders.service.js";

export default function (app) {
  let mgr = new OrdersService();
  let controller = new OrdersController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/orders", controller.get);
  app.get("/api/orders/:id", controller.getById);
  app.put("/api/orders/:id", controller.update);
  app.delete("/api/orders/:id", controller.delete);
  app.post("/api/orders/place", controller.placeOrder);
}

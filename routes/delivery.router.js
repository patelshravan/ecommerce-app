import DeliveryController from "../controllers/delivery.controller.js";
import DeliveriesService from "../services/delivery.service.js";

export default function (app) {
  let mgr = new DeliveriesService();
  let controller = new DeliveryController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/delivery", controller.get);
  app.post("/api/feedback", controller.post);
  app.get("/api/delivery/:id", controller.getById);
  app.put("/api/delivery/:id", controller.update);
  app.delete("/api/delivery/:id", controller.delete);
}

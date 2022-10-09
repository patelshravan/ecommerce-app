import CategoryController from "../controllers/category.controller.js";
import CategoryService from "../services/category.service.js";

export default function (app) {
  let mgr = new CategoryService();
  let controller = new CategoryController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/category", controller.get);
  app.post("/api/category", controller.post);
  app.get("/api/category/:id", controller.getById);
  app.put("/api/category/:id", controller.update);
}

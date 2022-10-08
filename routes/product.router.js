import ProductController from "../controllers/product.controller.js";
import ProductService from "../services/product.service.js";

export default function (app) {
  let mgr = new ProductService();
  let controller = new ProductController(mgr);
  //Map controller callback functions for rest API routes
  app.get("/api/product", controller.get);
}

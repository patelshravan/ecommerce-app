import TransactionController from "../controllers/transaction.controller.js";
import TransactionService from "../services/transaction.service.js";

export default function (app) {
  let mgr = new TransactionService();
  let controller = new TransactionController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/transactions", controller.get);
  app.post("/api/transactions/", controller.post);
  app.get("/api/transactions/:id", controller.getById);
  app.put("/api/transactions/:id", controller.update);
}

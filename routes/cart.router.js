import CartController from "../controllers/cart.controller.js";

export default function (app) {
  let cartcontroller = new CartController();
  app.get("/api/cart", cartcontroller.getAllItems);
  app.post("/api/addtocart", cartcontroller.addItem);
  app.delete("/api/removefromcart/:id", cartcontroller.removeItem);
  app.put("/api/updatecart/:id", cartcontroller.updateItem);
}

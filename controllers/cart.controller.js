export default class ShoppingCartController {
  getAllItems = (req, res) => {
    if (req.session.cart) {
      res.send(req.session.cart);
      res.end();
    } else {
      req.session.cart = [];
      res.send(req.session.cart);
      res.end();
    }
  };
  addItem = (req, res) => {
    let item = req.body;
    req.session.cart.push(item);
    res.sendStatus(200);
    res.end();
  };

  removeItem = (req, res) => {
    let itemId = req.params.id;
    req.session.cart = req.session.cart.filter(
      (currentItem) => currentItem.id != itemId
    );
    res.sendStatus(200);
    res.end();
  };

  updateItem = (req, res) => {
    let itemId = req.params.id;
    let item = req.body;
    req.session.cart = req.session.cart.filter(
      (currentItem) => currentItem.id != itemId
    );
    req.session.cart.push(item);
    res.sendStatus(200);
    res.end();
  };
}

// get("/api/checkout",(req,res)=>{
//     req.session.destroy((err)=>{

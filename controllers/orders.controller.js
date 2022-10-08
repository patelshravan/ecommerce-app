//Controller
export default class OrdersController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Orders");
    let allOrders = await this.repoManager.getAll();
    res.send(allOrders.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Orders By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a Orders");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  placeorder = async (req, res) => {
    console.log("Adding a Orders");
    let result = await this.repoManager.placeorder(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a orders");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };
}

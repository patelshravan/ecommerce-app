//Controller
export default class DeliveryController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Deliveries");
    let allOrders = await this.repoManager.getAll();
    res.send(allOrders.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Delivery By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a delivery");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  post = async (req, res) => {
    console.log("Adding a delivery");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a delivery");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };
}

//Controller
export default class PaymentsController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Payments");
    let allOrders = await this.repoManager.getAll();
    res.send(allOrders.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Payments By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a payment");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  post = async (req, res) => {
    console.log("Adding a payment");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a payment");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };
}

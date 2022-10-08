//Controller
export default class OrdersdataController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All OrdersData");
    let allOrdersdata = await this.repoManager.getAll();
    res.send(allOrdersdata.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Ordersdata By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a Ordersdata ");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  post = async (req, res) => {
    console.log("Adding a Ordersdata");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a ordersdata");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };
}

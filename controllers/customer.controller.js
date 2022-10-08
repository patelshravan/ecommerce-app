//Controller
export default class CustomerController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Customers");
    let allCustomers = await this.repoManager.getAll();
    res.send(allCustomers.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Customers By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a customer");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  updatePassword = async (req, res) => {
    console.log("updating customer's password");
    let result = await this.repoManager.updatePassword(req.params.id, req.body);
    res.send(result.data);
  };
}

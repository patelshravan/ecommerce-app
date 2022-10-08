//Controller
export default class SellerController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Sellers");
    let allSellers = await this.repoManager.getAll();
    res.send(allSellers.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All sellers By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a seller");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  updatePassword = async (req, res) => {
    console.log("updating seller's password");
    let result = await this.repoManager.updatePassword(req.params.id, req.body);
    res.send(result.data);
  };
}

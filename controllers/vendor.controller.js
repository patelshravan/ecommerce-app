//Controller
export default class VendorController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Vendors");
    let allVendors = await this.repoManager.getAll();
    res.send(allVendors.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All vendors By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a vendor");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };
}

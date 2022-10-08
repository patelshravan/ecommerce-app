//Controller
export default class ProductController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Products");
    let allProducts = await this.repoManager.getAll();
    res.send(allProducts.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Products By Id");
    let product = await this.repoManager.getById(req.params.id);
    res.send(product.data);
  };

  post = async (req, res) => {
    console.log("Adding a Product");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a Product");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };

  update = async (req, res) => {
    console.log("updating a Product");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };
}

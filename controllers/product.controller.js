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
}

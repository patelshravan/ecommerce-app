//Controller
export default class CategoryController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Categories");
    let allCategories = await this.repoManager.getAll();
    res.send(allCategories.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Categories By Id");
    let category = await this.repoManager.getById(req.params.id);
    res.send(category.data);
  };

  post = async (req, res) => {
    console.log("Adding a category");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  update = async (req, res) => {
    console.log("updating a Categories");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };
}

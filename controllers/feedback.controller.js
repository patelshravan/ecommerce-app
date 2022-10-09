//Controller
export default class FeedbackController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Feedbacks");
    let allOrders = await this.repoManager.getAll();
    res.send(allOrders.data);
  };

  getById = async (req, res) => {
    console.log("Fetching All Feedbacks By Id");
    let customer = await this.repoManager.getById(req.params.id);
    res.send(customer.data);
  };

  update = async (req, res) => {
    console.log("updating a feedback");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  post = async (req, res) => {
    console.log("Adding a feedback");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };

  delete = async (req, res) => {
    console.log("deleting a feedback");
    let result = await this.repoManager.delete(req.params.id);
    res.send(result.data);
  };
}

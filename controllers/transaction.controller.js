//Controller
export default class TransactionController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Transactions");
    let allAccounts = await this.repoManager.getAll();
    res.send(allAccounts.data);
  };

  getByNumber = async (req, res) => {
    console.log("Fetching Transaction Details By Number");
    let account = await this.repoManager.getByNumber(req);
    res.send(account.data);
  };

  getByUserId = async (req, res) => {
    console.log("Fetching Transaction By User Id");
    let account = await this.repoManager.getByUserId(req.params.id);
    res.send(account);
  };

  update = async (req, res) => {
    console.log("updating Transaction");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  post = async (req, res) => {
    console.log("posting Transaction");
    let result = await this.repoManager.post(req);
    res.send(result.data);
  };
}

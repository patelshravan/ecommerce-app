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

  getById = async (req, res) => {
    console.log("Fetching Transaction By User Id");
    let account = await this.repoManager.getById(req.params.id);
    res.send(account);
  };

  update = async (req, res) => {
    console.log("updating Transaction");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };

  makeTransfer = async (req, res) => {
    console.log("making transfer");
    let result = await this.repoManager.makeTransfer(req);
    res.send(result.data);
  };
}

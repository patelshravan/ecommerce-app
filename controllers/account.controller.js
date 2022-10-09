//Controller
export default class AccountController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  get = async (req, res) => {
    console.log("Fetching All Accounts");
    let allAccounts = await this.repoManager.getAll();
    res.send(allAccounts.data);
  };

  getByNumber = async (req, res) => {
    console.log("Fetching Account Details By Number");
    let account = await this.repoManager.getByNumber(req);
    res.send(account.data);
  };

  getByUserId = async (req, res) => {
    console.log("Fetching Accounts By User Id");
    let account = await this.repoManager.getByUserId(req.params.id);
    res.send(account);
  };

  update = async (req, res) => {
    console.log("updating acounts");
    let result = await this.repoManager.update(req.params.id, req.body);
    res.send(result.data);
  };
}

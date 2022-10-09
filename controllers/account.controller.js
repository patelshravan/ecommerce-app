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
  
    getById = async (req, res) => {
      console.log("Fetching All Accounts By Id");
      let customer = await this.repoManager.getById(req.params.id);
      res.send(customer.data);
    };
  
    update = async (req, res) => {
      console.log("updating acounts");
      let result = await this.repoManager.update(req.params.id, req.body);
      res.send(result.data);
    };
  }
  
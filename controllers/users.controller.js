//Controller
export default class UsersController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.repoManager = mgr;
    }
  
    get = async (req, res) => {
      console.log("Fetching All Users");
      let allUsers = await this.repoManager.getAll();
      res.send(allUsers.data);
    };
  
    getById = async (req, res) => {
      console.log("Fetching All users By Id");
      let customer = await this.repoManager.getById(req.params.id);
      res.send(customer.data);
    };
  
    update = async (req, res) => {
      console.log("updating users data");
      let result = await this.repoManager.update(req.params.id, req.body);
      res.send(result.data);
    };
  }
  
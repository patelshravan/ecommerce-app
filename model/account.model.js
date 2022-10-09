export default class Accounts {
    //Parameterized constructor
    constructor(account_number, user_id, balance, created_at, modified_at) {
      this.id = account_number;
      this.name = user_id;
      this.name = balance;
      this.created_at = created_at;
      this.modified_at = modified_at;
  
      this.table_name = "accounts";
    }
  
    display() {
      console.log(`Account Number= ${this.account_number}`);
      console.log(`USer Id= ${this.user_id}`);
      console.log(`Balance= ${this.balance}`);
      console.log(`Created At= ${this.created_at}`);
    }
  }
  
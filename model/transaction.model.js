export default class Transactions {
  //Parameterized constructor
  constructor(id, from_account, to_account, amount, created_at) {
    this.id = id;
    this.from_account = from_account;
    this.to_account = to_account;
    this.amount = amount;
    this.created_at = created_at;

    this.table_name = "transactions";
  }

  display() {
    console.log(`Account Number= ${this.id}`);
    console.log(`From Account= ${this.from_account}`);
    console.log(`To Account= ${this.to_account}`);
    console.log(`Amount= ${this.amount}`);
  }
}

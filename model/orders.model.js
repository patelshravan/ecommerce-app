export default class Orders {
  //Parameterized constructor
  constructor(id, status, customer_id, created_at, modified_at) {
    this.id = id;
    this.status = status;
    this.customer_id = customer_id;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "orders";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Status= ${this.status}`);
    console.log(`Customer Id= ${this.customer_id}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

export default class Deliveries {
  //Parameterized constructor
  constructor(id, order_id, vendor_id, location, created_at, modified_at) {
    this.id = id;
    this.order_id = order_id;
    this.vendor_id = vendor_id;
    this.location = location;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "orders";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Order Id= ${this.order_id}`);
    console.log(`Vendor Id= ${this.vendor_id}`);
    console.log(`Location= ${this.location}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

export default class Ordersdata {
  //Parameterized constructor
  constructor(
    id,
    quantity,
    price,
    order_id,
    product_id,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.order_id = order_id;
    this.product_id = product_id;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "ordersdata";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Quantity= ${this.quantity}`);
    console.log(`Price= ${this.price}`);
    console.log(`Order Id= ${this.order_id}`);
    console.log(`Product Id= ${this.product_id}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

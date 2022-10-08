export default class Payments {
  //Parameterized constructor
  constructor(
    id,
    total_amount,
    discount_percentage,
    payable_amount,
    order_id,
    mode_of_payment,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.total_amount = total_amount;
    this.discount_percentage = discount_percentage;
    this.payable_amount = payable_amount;
    this.order_is = order_id;
    this.mode_of_payment = mode_of_payment;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "payments";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Total Amount= ${this.total_amount}`);
    console.log(`Discount= ${this.discount_percentage}`);
    console.log(`Payable Amount= ${this.payable_amount}`);
    console.log(`Order Id= ${this.order_id}`);
    console.log(`Payment Mode= ${this.mode_of_payment}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

export default class Feedbacks {
  //Parameterized constructor
  constructor(
    id,
    image_url,
    product_id,
    customer_id,
    description,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.image_url = image_url;
    this.product_id = product_id;
    this.customer_id = customer_id;
    this.description = description;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "feedbacks";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Image URL= ${this.image_url}`);
    console.log(`Product Id= ${this.product_id}`);
    console.log(`Customer Id= ${this.customer_id}`);
    console.log(`Description= ${this.description}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

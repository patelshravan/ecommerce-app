export default class Product {
  //Parameterized constructor
  constructor(
    id,
    title,
    description,
    image_url,
    price,
    quantity,
    sellers_id,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
    this.quantity = quantity;
    this.sellers_id = sellers_id;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "products";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Title= ${this.title}`);
    console.log(`Description= ${this.description}`);
    console.log(`Image URL= ${this.image_url}`);
    console.log(`Price= ${this.price}`);
    console.log(`Quantity= ${this.quantity}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

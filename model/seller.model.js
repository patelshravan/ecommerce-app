export default class Seller {
  //Parameterized constructor
  constructor(
    id,
    user_id,
    name,
    contact_no,
    location,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.title = user_id;
    this.description = name;
    this.price = contact_no;
    this.quantity = location;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "sellers";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Title= ${this.user_id}`);
    console.log(`Description= ${this.name}`);
    console.log(`Price= ${this.contact_no}`);
    console.log(`Quantity= ${this.location}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

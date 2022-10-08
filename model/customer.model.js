export default class Customer {
  //Parameterized constructor
  constructor(
    id,
    user_id,
    firstname,
    lastname,
    contact_no,
    location,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.title = user_id;
    this.description = firstname;
    this.image_url = lastname;
    this.price = contact_no;
    this.quantity = location;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "customers";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Title= ${this.user_id}`);
    console.log(`Description= ${this.firstname}`);
    console.log(`Image URL= ${this.lastname}`);
    console.log(`Price= ${this.contact_no}`);
    console.log(`Quantity= ${this.location}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

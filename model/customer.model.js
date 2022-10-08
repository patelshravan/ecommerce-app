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
    this.user_id = user_id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.contact_no = contact_no;
    this.location = location;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "customers";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`User Id= ${this.user_id}`);
    console.log(`First Name= ${this.firstname}`);
    console.log(`Last Name= ${this.lastname}`);
    console.log(`Mobile= ${this.contact_no}`);
    console.log(`Location= ${this.location}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

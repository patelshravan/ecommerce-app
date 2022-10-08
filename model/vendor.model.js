export default class Vendor {
  //Parameterized constructor
  constructor(id, user_id, name, contact_no, created_at, modified_at) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.contact_no = contact_no;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "vendors";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`User Id= ${this.user_id}`);
    console.log(`Name= ${this.name}`);
    console.log(`Mobile= ${this.contact_no}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

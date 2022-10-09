export default class Category {
  //Parameterized constructor
  constructor(id, name, created_at, modified_at) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "categories";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Name= ${this.name}`);
    console.log(`Created At= ${this.created_at}`);
  }
}

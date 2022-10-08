export default class Auth {
  //Parameterized constructor
  constructor(id, email, password, user_type) {
    this.id = id;
    this.title = email;
    this.description = password;
    this.image_url = user_type;

    this.table_name = "users";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`Email= ${this.email}`);
    console.log(`Password= ${this.password}`);
    console.log(`User Type= ${this.user_type}`);
  }
}

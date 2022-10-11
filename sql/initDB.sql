-- CREATE DB, CREATE ALL TABLES
CREATE DATABASE ecommerce;
USE ecommerce;
CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(50) NOT NULL,
    password varchar(6) NOT NULL,
    user_type ENUM ('customer', 'seller', 'staff', 'vendor')
);
CREATE TABLE customers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    contact_no VARCHAR(11) UNIQUE,
    location VARCHAR(50),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE sellers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    name VARCHAR(20) NOT NULL,
    contact_no VARCHAR(10) UNIQUE,
    location VARCHAR(50),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE staffs(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    contact_no VARCHAR(10) UNIQUE NOT NULL,
    empid INT NOT NULL UNIQUE NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE vendors(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    name VARCHAR(20) NOT NULL,
    contact_no VARCHAR(12) UNIQUE NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE categories(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name ENUM (
        'fashion',
        'electronics',
        'electric',
        'fitness',
        'audio'
    ),
    created_at DATETIME,
    modified_at DATETIME
);
CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(300),
    image_url VARCHAR(250),
    quantity INT NOT NULL CHECK (quantity >= 0),
    price FLOAT DEFAULT 0,
    category_id INT NOT NULL,
    seller_id INT NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(seller_id) REFERENCES sellers(id)
);
CREATE TABLE orders(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status ENUM (
        'delivered',
        'placed',
        'intransit',
        'failed',
        'dispatched'
    ),
    customer_id INT NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
CREATE TABLE ordersData(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantity INT,
    price FLOAT DEFAULT 0,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);
CREATE TABLE payments(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    -- amount FLOAT DEFAULT 0,
    total_amount float DEFAULT 0,
    discount_percentage float DEFAULT 0,
    payable_amount float DEFAULT 0,
    order_id INT NOT NULL,
    mode_of_payment ENUM ('netbanking', 'UPI', 'debitcard', 'creditcard'),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(order_id) REFERENCES orders(id)
);
CREATE TABLE feedbacks(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_url VARCHAR(250) NOT NULL,
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
    description VARCHAR(500) NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
CREATE TABLE deliveries(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    vendor_id INT NOT NULL,
    location VARCHAR(50),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(vendor_id) REFERENCES vendors(id)
);
CREATE TABLE accounts (
    account_number VARCHAR(50) PRIMARY KEY,
    user_id INT,
    balance float NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE transactions (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    from_account VARCHAR(50),
    to_account VARCHAR(50),
    amount FLOAT DEFAULT 0,
    created_at DATETIME,
    FOREIGN KEY(from_account) REFERENCES accounts(account_number),
    FOREIGN KEY(to_account) REFERENCES accounts(account_number)
);
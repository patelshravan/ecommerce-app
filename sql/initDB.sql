-- CREATE DB, CREATE ALL TABLES
CREATE DATABASE ecommerce;
USE ecommerce;
CREATE TABLE customers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    email VARCHAR(50) UNIQUE NOT NULL,
    contact_no VARCHAR(10) UNIQUE,
    password VARCHAR(6) NOT NULL,
    location VARCHAR(50),
    modified_at DATETIME,
    created_at DATETIME
);
CREATE TABLE seller(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    location VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(6) NOT NULL,
    contact_no VARCHAR(10) UNIQUE,
    created_at DATETIME,
    modified_at DATETIME
);
CREATE TABLE category(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);
CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(300),
    image_url VARCHAR(250),
    quantity INT,
    category_id NOT NULL,
    seller_id NOT NULL created_at DATETIME,
    modified_at DATETIME,
    price FLOAT DEFAULT 0,
    FOREIGN KEY(category_id) REFERENCES category(id) FOREIGN KEY(seller_id) REFERENCES seller(id)
);
CREATE TABLE orders(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(20),
    customer_id INT NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
CREATE TABLE orders_data(
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
    amount FLOAT DEFAULT 0,
    order_id INT NOT NULL,
    mode_of_payment VARCHAR(20) NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(order_id) REFERENCES orders(id)
);
CREATE TABLE feedback(
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
CREATE TABLE vendor(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(6) NOT NULL,
    contact_no VARCHAR(12) UNIQUE NOT NULL,
    created_at DATETIME,
    modified_at DATETIME
);
CREATE TABLE delivery(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    status VARCHAR(300),
    location VARCHAR(50),
    vendor_id INT NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(vendor_id) REFERENCES vendor(id)
);
CREATE TABLE staff(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(6) NOT NULL,
    contact_no VARCHAR(10) UNIQUE NOT NULL,
    empid INT NOT NULL UNIQUE NOT NULL,
    created_at DATETIME,
    modified_at DATETIME,
);
-- INSERT SAMPLE DATA INTO TABLES
-- INSERT INTO CUSTOMER
INSERT INTO customers(
        firstname,
        lastname,
        email,
        contact_no,
        password,
        location,
        modified_at,
        created_at
    )
values(
        "Shravan",
        "Patel",
        "shravan@gmail.com",
        "7726378278",
        "sp@123",
        "Jaipur, Rajasthan",
        "2022-02-10",
        "2021-09-26"
    );
SET @customer1Id = LAST_INSERT_ID();
INSERT INTO customers(
        firstname,
        lastname,
        email,
        contact_no,
        password,
        location,
        modified_at,
        created_at
    )
values(
        "Ganesh",
        "Patel",
        "ganesh@gmail.com",
        "7726378287",
        "gp@123",
        "Sirohi, Rajasthan",
        "2022-02-10",
        "2021-09-26"
    );
SET @customer2Id = LAST_INSERT_ID();
-- INSERT INTO SELLER
INSERT INTO sellers(
        name,
        location,
        email,
        password,
        contact_no,
        created_at,
        modified_at
    )
VALUES(
        "A Electronics",
        "Haryana",
        "a@gmail.com",
        "a@123",
        "7643223435",
        "2022-02-10",
        "2021-09-26"
    );
SET @sellers1Id = LAST_INSERT_ID();
INSERT INTO sellers(
        name,
        location,
        email,
        password,
        contact_no,
        created_at,
        modified_at
    )
VALUES(
        "B Electronics",
        "Punjab",
        "b@gmail.com",
        "b@123",
        "7643223445",
        "2022-02-10",
        "2021-09-26"
    );
SET @sellers2Id = LAST_INSERT_ID();
-- INSERT INTO categories
INSERT INTO categories(name)
VALUES ("Fashion");
SET @categories1Id = LAST_INSERT_ID();
INSERT INTO categories(name)
VALUES ("Electronincs");
SET @categories2Id = LAST_INSERT_ID();
-- INSERT INTO PRODUCTS
INSERT INTO products(
        title,
        description,
        image_url,
        quantity,
        price,
        categories_id,
        sellers_id,
        created_at,
        modified_at
    )
VALUES(
        "Samsung Galaxy S20",
        "Smart Phone",
        "https://m.media-amazon.com/images/I/81QVLzeVckL._SL1500_.jpg",
        1,
        29999,
        @categories1Id,
        @sellers1Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @product1Id = LAST_INSERT_ID();
INSERT INTO products(
        title,
        description,
        image_url,
        quantity,
        price,
        categories_id,
        sellers_id,
        created_at,
        modified_at
    )
VALUES(
        "Fossil Gen 5",
        "Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music Storage and Smartphone Notifications",
        "https://m.media-amazon.com/images/I/71qNX0wixBL._UL1500_.jpg",
        2,
        18396,
        @categories2Id,
        @sellers2Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @product2Id = LAST_INSERT_ID();
-- INSERT INTO ORDERS
INSERT INTO orders(status, customer_id, created_at, modified_at)
values(
        "Delivered",
        @customer1Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @order1Id = LAST_INSERT_ID();
INSERT INTO orders(status, customer_id, created_at, modified_at)
values(
        "In Transit",
        @customer2Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @order2Id = LAST_INSERT_ID();
-- INSERT INTO ORDERS_DATA
INSERT INTO orders_data(
        quantity,
        price,
        order_id,
        product_id,
        created_at,
        modified_at
    )
VALUES(
        1,
        29999,
        @order1Id,
        @product1Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @order_data1Id = LAST_INSERT_ID();
INSERT INTO orders_data(
        quantity,
        price,
        order_id,
        product_id,
        created_at,
        modified_at
    )
VALUES(
        2,
        18396,
        @order2Id,
        @product2Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @order_data2Id = LAST_INSERT_ID();
-- INSERT INTO PAYMENTS
INSERT INTO payments(
        amount,
        order_id,
        mode_of_payment,
        created_at,
        modified_at
    )
values(
        29999,
        @order1Id,
        "cash",
        "2022-02-10",
        "2021-09-26"
    );
SET @payments1Id = LAST_INSERT_ID();
INSERT INTO payments(
        amount,
        order_id,
        mode_of_payment,
        created_at,
        modified_at
    )
values(
        18396,
        @order2Id,
        "upi",
        "2022-02-10",
        "2021-09-26"
    );
SET @payments2Id = LAST_INSERT_ID();
-- INSERT INTO FEEDBACK
INSERT INTO feedback(
        image_url,
        product_id,
        customer_id,
        description,
        created_at,
        modified_at
    )
values(
        "https://m.media-amazon.com/images/I/81QVLzeVckL._SL1500_.jpg",
        @product1Id,
        @customer1Id,
        "Nice smart phone",
        "2022-02-10",
        "2021-09-26"
    );
INSERT INTO feedback(
        image_url,
        product_id,
        customer_id,
        description,
        created_at,
        modified_at
    )
values(
        "https://m.media-amazon.com/images/I/71qNX0wixBL._UL1500_.jpg",
        @product2Id,
        @customer2Id,
        "Nice smart wacth",
        "2022-02-10",
        "2021-09-26"
    );
-- INSERT INTO VENDOR
INSERT INTO vendors(
        name,
        email,
        password,
        contact_no,
        created_at,
        modified_at
    )
values(
        "BlueDart",
        "bluedart@bluedart.com",
        "bd@123",
        "5435433232",
        "2022-02-10",
        "2021-09-26"
    );
SET @vendors1Id = LAST_INSERT_ID();
INSERT INTO vendors(
        name,
        email,
        password,
        contact_no,
        created_at,
        modified_at
    )
values(
        "Delhivery",
        "delhivery@delhivery.com",
        "dl@123",
        "5435433231",
        "2022-02-10",
        "2021-09-26"
    );
SET @vendors2Id = LAST_INSERT_ID();
-- INSERT INTO DELIVERY
INSERT INTO deliveries(
        order_id,
        status,
        location,
        vendors_id,
        created_at,
        modified_at
    )
values(
        @order1Id,
        "delivered",
        "Jaipur",
        @vendors1Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @deliveries1Id = LAST_INSERT_ID();
INSERT INTO deliveries(
        order_id,
        status,
        location,
        vendors_id,
        created_at,
        modified_at
    )
values(
        @order2Id,
        "in transit",
        "Sirohi",
        @vendors2Id,
        "2022-02-10",
        "2021-09-26"
    );
SET @deliveries2Id = LAST_INSERT_ID();
-- INERT INTO STAFF
INSERT INTO staffs(
        firstname,
        lastname,
        email,
        password,
        contact_no,
        empid,
        created_at,
        modified_at
    )
values(
        "Suresh",
        "Solanki",
        "ss@gmail.com",
        "ss@123",
        "7643223435",
        101,
        "2022-02-10",
        "2021-09-26"
    );
INSERT INTO staffs(
        firstname,
        lastname,
        email,
        password,
        contact_no,
        empid,
        created_at,
        modified_at
    )
values(
        "Pradeep",
        "Solanki",
        "ps@gmail.com",
        "ps@123",
        "7643223535",
        102,
        "2022-02-10",
        "2021-09-26"
    );
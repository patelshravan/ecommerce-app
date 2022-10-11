-- INSERT SAMPLE DATA INTO TABLES
-- INSERT INTO USERS 
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "shravan@gmail.com",
        "sp@123",
        "customer"
    );
SET @user1Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "ganesh@gmail.com",
        "gp@123",
        "customer"
    );
SET @user2Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "a@gmail.com",
        "a@123",
        "seller"
    );
SET @user3Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "b@gmail.com",
        "b@123",
        "seller"
    );
SET @user4Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "kailash@gmail.com",
        "kp@123",
        "staff"
    );
SET @user5Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "suresh@gmail.com",
        "sk@123",
        "staff"
    );
SET @user6Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "delhivery@delhivery.com",
        "dl@123",
        "vendor"
    );
SET @user7Id = LAST_INSERT_ID();
INSERT INTO users(
        email,
        password,
        user_type
    )
values(
        "bluedart@gmail.com",
        "bd@123",
        "vendor"
    );
SET @user8Id = LAST_INSERT_ID();
-- INSERT INTO ACCOUNTS
INSERT INTO accounts(
        account_number,
        user_id,
        balance,
        created_at,
        modified_at
    )
values(
        "45615156165",
        @user1Id,
        10000,
        "2022-02-10",
        "2021-09-26"
    );
SET @accounts1Id = LAST_INSERT_ID();
INSERT INTO accounts(
        account_number,
        user_id,
        balance,
        created_at,
        modified_at
    )
values(
        "1234",
        @user3Id,
        15000,
        "2022-02-10",
        "2021-09-26"
    );
SET @accounts2Id = LAST_INSERT_ID();
INSERT INTO accounts(
        account_number,
        user_id,
        balance,
        created_at,
        modified_at
    )
values(
        "1122",
        @user5Id,
        20000,
        "2022-02-10",
        "2021-09-26"
    );
SET @accounts3Id = LAST_INSERT_ID();
INSERT INTO accounts(
        account_number,
        user_id,
        balance,
        created_at,
        modified_at
    )
values(
        "45615166165",
        @user7Id,
        5000,
        "2022-02-10",
        "2021-09-26"
    );
SET @accounts4Id = LAST_INSERT_ID();
-- INSERT INTO CUSTOMERs
INSERT INTO customers(
        user_id,
        firstname,
        lastname,
        contact_no,
        location,
        created_at,
        modified_at
    )
values(
        @user1Id,
        "Shravan",
        "Patel",
        "7726378278",
        "Jaipur, Rajasthan",
        "2022-02-10",
        "2021-09-26"
    );
SET @customer1Id = LAST_INSERT_ID();
INSERT INTO customers(
        user_id,
        firstname,
        lastname,
        contact_no,
        location,
        modified_at,
        created_at
    )
values(
        @user2Id,
        "Ganesh",
        "Patel",
        "7726378287",
        "Sirohi, Rajasthan",
        "2022-02-10",
        "2021-09-26"
    );
SET @customer2Id = LAST_INSERT_ID();
-- INSERT INTO SELLERS
INSERT INTO sellers(
        user_id,
        name,
        contact_no,
        location,
        created_at,
        modified_at
    )
VALUES(
        @user3Id,
        "A Electronics",
        "Haryana",
        "7643223435",
        "2022-02-10",
        "2021-09-26"
    );
SET @sellers1Id = LAST_INSERT_ID();
INSERT INTO sellers(
        user_id,
        name,
        location,
        contact_no,
        created_at,
        modified_at
    )
VALUES(
        @user4Id,
        "B Electronics",
        "Punjab",
        "7643223445",
        "2022-02-10",
        "2021-09-26"
    );
SET @sellers2Id = LAST_INSERT_ID();
-- INERT INTO STAFFS
INSERT INTO staffs(
        user_id,
        firstname,
        lastname,
        contact_no,
        empid,
        created_at,
        modified_at
    )
values(
        @user5Id,
        "Suresh",
        "Solanki",
        "7643223435",
        101,
        "2022-02-10",
        "2021-09-26"
    );
INSERT INTO staffs(
        user_id,
        firstname,
        lastname,
        contact_no,
        empid,
        created_at,
        modified_at
    )
values(
        @user6Id,
        "Pradeep",
        "Solanki",
        "7643223535",
        102,
        "2022-02-10",
        "2021-09-26"
    );
-- INSERT INTO VENDORS
INSERT INTO vendors(
        user_id,
        name,
        contact_no,
        created_at,
        modified_at
    )
values(
        @user7Id,
        "BlueDart",
        "5435433232",
        "2022-02-10",
        "2021-09-26"
    );
SET @vendors1Id = LAST_INSERT_ID();
INSERT INTO vendors(
        user_id,
        name,
        contact_no,
        created_at,
        modified_at
    )
values(
        @user8Id,
        "Delhivery",
        "5435433231",
        "2022-02-10",
        "2021-09-26"
    );
SET @vendors2Id = LAST_INSERT_ID();
-- INSERT INTO CATEGORIES
INSERT INTO categories(name, created_at, modified_at)
VALUES ("Fashion", "2022-02-10", "2021-09-26");
SET @categories1Id = LAST_INSERT_ID();
INSERT INTO categories(name, created_at, modified_at)
VALUES ("Electronincs", "2022-02-10", "2021-09-26");
SET @categories2Id = LAST_INSERT_ID();
-- INSERT INTO PRODUCTS
INSERT INTO products(
        title,
        description,
        image_url,
        quantity,
        price,
        category_id,
        seller_id,
        created_at,
        modified_at
    )
VALUES(
        "Allen Solly",
        "Men's Regular Fit T-Shirt",
        "https://m.media-amazon.com/images/I/61Ht616HQML._UY741_.jpg",
        97,
        419,
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
        category_id,
        seller_id,
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
INSERT INTO ordersData(
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
INSERT INTO ordersData(
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
        total_amount,
        discount_percentage,
        payable_amount,
        order_id,
        mode_of_payment,
        created_at,
        modified_at
    )
values(
        29999,
        10,
        26999.1,
        @order1Id,
        "netbanking",
        "2022-02-10",
        "2021-09-26"
    );
SET @payments1Id = LAST_INSERT_ID();
INSERT INTO payments(
        total_amount,
        discount_percentage,
        payable_amount,
        order_id,
        mode_of_payment,
        created_at,
        modified_at
    )
values(
        18396,
        5,
        17476.2,
        @order2Id,
        "UPI",
        "2022-02-10",
        "2021-09-26"
    );
SET @payments2Id = LAST_INSERT_ID();
-- INSERT INTO FEEDBACKS
INSERT INTO feedbacks(
        image_url,
        product_id,
        customer_id,
        description,
        created_at,
        modified_at
    )
values(
        "https://m.media-amazon.com/images/I/61Ht616HQML._UY741_.jpg",
        @product1Id,
        @customer1Id,
        "Nice shirt",
        "2022-02-10",
        "2021-09-26"
    );
INSERT INTO feedbacks(
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
-- INSERT INTO DELIVERIES
INSERT INTO deliveries(
        order_id,
        vendor_id,
        location,
        created_at,
        modified_at
    )
values(
        @order1Id,
        @vendors1Id,
        "Jaipur",
        "2022-02-10",
        "2021-09-26"
    );
SET @deliveries1Id = LAST_INSERT_ID();
INSERT INTO deliveries(
        order_id,
        vendor_id,
        location,
        created_at,
        modified_at
    )
values(
        @order2Id,
        @vendors2Id,
        "Sirohi",
        "2022-02-10",
        "2021-09-26"
    );
SET @deliveries2Id = LAST_INSERT_ID();
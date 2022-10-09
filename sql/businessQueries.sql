-- ALL BUSINESS RELATED QUERIES
USE ecommerce;

-- GET ALL CUSTOMERS
SELECT * FROM customers;

-- GET CUSTOMER BY ID
SELECT * FROM customers WHERE id = 1;

-- REMOVE CUSTOMER
DELETE FROM customers Where id = 2;

-- UPDATE CUSTOMER
UPDATE customers SET contact_no = "7742026070", modified_at = "2022-09-24" WHERE id = "1";

-- GET CUSTOMER PERSONAL PROFILE
SELECT customers.firstname as firstname,
    customers.email as email,
    customers.contact_no as contact_no,
    orders.status as order_status,
    orders.modified_at as order_date,
    ordersData.quantity as order_quantity,
    ordersData.price as order_item_price,
    products.title as product_title,
    products.price as product_current_price,
    payments.mode_of_payment as mode_of_payment,
    customers.id as customer_id,
    orders.id as order_id,
    ordersData.id as ordersData_id,
    products.id as product_id,
    payments.id as payment_id
FROM ordersData
    JOIN products ON ordersData.product_id = products.id
    JOIN orders ON ordersData.order_id = order_id
    JOIN payments ON orders.id = payments.order_id
    JOIN customers ON orders.customer_id = customers.id
WHERE customers.id = 1
    AND ordersData.product_id = products.id
    AND orders.id = payments.order_id
    AND orders.customer_id = customers.id
    AND orders.id = ordersData.order_id;

-- GET ALL SELLERS
SELECT * FROM sellers;

-- GET SELLERS BY ID
SELECT * FROM sellers WHERE id = "1" 

-- REMOVE SELLER
DELETE FROM sellers Where id = "1" 

-- UPDATE SELLER
UPDATE sellers SET contact_no = "7894563210", modified_at = "2021-02-21" WHERE id = "1";

-- GET SELLER PROFILE
SELECT name,
    location,
    email,
    contact_no
FROM sellers;
-- GET SELLER PRODUCTS
SELECT sellers.name as sellers_name,
    sellers.email as sellers_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity
FROM sellers
    JOIN products ON sellers.id = products.sellers_id
WHERE sellers.id = 1
    AND sellers.id = products.sellers_id;

-- GET SELLER ORDERS
SELECT sellers.name as sellers_name,
    sellers.email as sellers_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity,
    ordersData.quantity as order_quantity,
    ordersData.price as order_item_price,
    orders.status as order_status
FROM ordersData
    JOIN orders ON ordersData.order_id = orders.id
    JOIN products ON products.id = ordersData.product_id
    JOIN sellers ON sellers.id = products.sellers_id
WHERE sellers.id = 1
    AND ordersData.order_id = orders.id
    AND products.id = ordersData.product_id
    AND sellers.id = products.sellers_id;

-- GET VENDOR PROFILE
SELECT name,
    email,
    contact_no
FROM vendors;

-- GET PRODUCTS WHERE PRICE > 100
SELECT title,
    id,
    quantity
FROM products
WHERE price > 100;

-- GET ALL AVAILABLE PRODUCTS
SELECT title,
    id,
    quantity
FROM products
WHERE quantity > 0;

-- GET UNAVAILABLE PRODUCTS
SELECT title,
    id,
    quantity
FROM products
WHERE quantity = 0;

-- GET ORDER LIST
SELECT status,
    COUNT(*) AS count
FROM orders
GROUP BY status;

-- GET categories LIST
SELECT products.category_id,
    categories.name,
    COUNT(*) as count
FROM products
    JOIN categories ON (products.category_id = categories.id)
GROUP BY products.category_id;

-- BUSINESS RELATED
-- For Placing a Order

INSERT INTO orders (status, customer_id, created_at, modified_at) VALUES ("placed", 1, "2022-01-02", "200-01-11"); --insert into orders

SET @order_id = LAST_INSERT_ID(); --get last used id
INSERT INTO ordersdata (order_id, product_id, price, quantity, created_at, modified_at) VALUES (@order_id, 1, 2000, 100,"2022-01-11 ", "2022-01-11") --insert into ordersdata

UPDATE products SET quantity = quantity - 2 WHERE id = 1; --update products table
       
INSERT INTO payments (total_amount, discount_percentage,payable_amount,mode_of_payment, order_id, created_at, modified_at) VALUES (1000, 10 ,900, "UPI", @order_id, "2022-01-02", "2022-01-02"); --inert into payments

-- For Paymnets Handling

INSERT INTO payments(total_amount,discount_percentage,payable_amount,order_id,mode_of_payment,created_at,modified_at) values(1500,10,1350,1,"netbanking","2022-01-02","2022-01-02");

UPDATE orders SET paid = true; WHERE id=1;
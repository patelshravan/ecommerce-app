-- ALL BUSINESS RELATED QUERIES

USE ecommerce;

-- GET ALL CUSTOMERS
SELECT *
FROM customers;

-- GET CUSTOMER BY ID
SELECT *
FROM customers
WHERE id = 1;

-- REMOVE CUSTOMER
DELETE FROM customers
Where id = 2;

-- UPDATE CUSTOMER
UPDATE customers
SET contact_no = "7742026070",
    modified_at = "2022-09-24"
WHERE id = "1";

-- GET CUSTOMER PERSONAL PROFILE
SELECT customers.firstname as firstname,
    customers.email as email,
    customers.contact_no as contact_no,
    orders.status as order_status,
    orders.modified_at as order_date,
    orders_data.quantity as order_quantity,
    orders_data.price as order_item_price,
    products.title as product_title,
    products.price as product_current_price,
    payments.mode_of_payment as mode_of_payment,
    customers.id as customer_id,
    orders.id as order_id,
    orders_data.id as orders_data_id,
    products.id as product_id,
    payments.id as payment_id
FROM orders_data
    JOIN products ON orders_data.product_id = products.id
    JOIN orders ON orders_data.order_id = order_id
    JOIN payments ON orders.id = payments.order_id
    JOIN customers ON orders.customer_id = customers.id
WHERE customers.id = 1
    AND orders_data.product_id = products.id
    AND orders.id = payments.order_id
    AND orders.customer_id = customers.id
    AND orders.id = orders_data.order_id;

-- GET ALL SELLERS
SELECT *
FROM seller;

-- GET SELLERS BY ID
SELECT *
FROM seller
WHERE id = "1" 

-- REMOVE SELLER
DELETE FROM seller
Where id = "1" 

-- UPDATE SELLER
UPDATE seller
SET contact_no = "7894563210",
    modified_at = "2021-02-21"
WHERE id = "1";

-- GET SELLER PROFILE
SELECT name,
    location,
    email,
    contact_no
FROM seller;

-- GET SELLER PRODUCTS
SELECT seller.name as seller_name,
    seller.email as seller_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity
FROM seller
    JOIN products ON seller.id = products.seller_id
WHERE seller.id = 1
    AND seller.id = products.seller_id;

-- GET SELLER ORDERS
SELECT seller.name as seller_name,
    seller.email as seller_email,
    products.title as product_title,
    products.price as product_price,
    products.quantity as product_quantity,
    orders_data.quantity as order_quantity,
    orders_data.price as order_item_price,
    orders.status as order_status
FROM orders_data
    JOIN orders ON orders_data.order_id = orders.id
    JOIN products ON products.id = orders_data.product_id
    JOIN seller ON seller.id = products.seller_id
WHERE seller.id = 1
    AND orders_data.order_id = orders.id
    AND products.id = orders_data.product_id
    AND seller.id = products.seller_id;

-- GET VENDOR PROFILE
SELECT name,
    email,
    contact_no
FROM vendor;

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

-- GET CATEGORY LIST
SELECT products.category_id,
    category.name,
    COUNT(*) as count
FROM products
    JOIN category ON (products.category_id = category.id)
GROUP BY products.category_id;
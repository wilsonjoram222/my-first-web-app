CREATE DATABASE website;
CREATE TABLE Products
(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(225) NOT NULL,
    product_description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

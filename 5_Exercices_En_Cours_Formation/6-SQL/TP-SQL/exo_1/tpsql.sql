CREATE DATABASE shop_db;

USE shop_db;

CREATE TABLE products (
ref CHAR(20) primary KEY NOT NULL,
`name` VARCHAR (100) NOT NULL, 
price DECIMAL(6,2) NOT NULL, 
description LONGTEXT, 
stock INT DEFAULT 0 
);

CREATE TABLE orders (
id  INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
ref VARCHAR(45) UNIQUE NOT NULL, 
`date` DATE NOT NULL, 
shipping_cost DECIMAL(6,2) default 0.00,
total_amount DECIMAL(6,2) default 0.00
);

CREATE TABLE orders_products(
id_order INT, 
ref_product CHAR(20),
quantity INT DEFAULT 0,
FOREIGN KEY (id_order) REFERENCES orders(id),
FOREIGN KEY (ref_product) REFERENCES products(ref),
PRIMARY KEY(id_order, ref_product)
);

ALTER TABLE customers
ADD id_address INT;

ALTER TABLE orders
ADD FOREIGN KEY (id_address) REFERENCES addresses(id);

/*Une catégorie possède un nom (VARCHAR), une description (LONGTEXT), et peut
ou non être associée à une catégorie Parente (parent_category_id).*/
CREATE TABLE `categories` (
id INT primary key AUTO_INCREMENT NOT NULL, 
`name` VARCHAR(50) NOT NULL, 
`description` LONGTEXT,
id_parent_category INT,
FOREIGN KEY (id_parent_category) REFERENCES `categories`(id)
);

CREATE TABLE products_categories(
ref_product CHAR(20),
id_category INT,
FOREIGN KEY (ref_product) REFERENCES products(ref),
FOREIGN KEY (id_category) REFERENCES `categories`(id),
PRIMARY KEY (ref_product,id_category)
);

/*
INFORMATIQUE 
	->Stockage
	->impression
	->cartes meres
VETEMENTS 
	-> homme 
		->chaussures 
	->femme
*/
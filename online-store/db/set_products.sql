
DROP TABLE IF EXISTS cart, products, orders, users;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Users Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

-- INSERT INTO users (first_name, last_name, username, password) VALUES
-- ('Jon', 'Myrick', 'jon', '123'),
-- ('Sara', 'Johnson', 'sara', '123');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Products Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    price VARCHAR(255),
    photo VARCHAR(255)
);

INSERT INTO products (title, description, price, photo) VALUES
('Shirt', 'size: L', 34, 'http://gloimg.dresslily.com/L/2015/201507/source-img/1436466658259-P-2819655.jpg?a=6'),
('Pants', 'color: blue', 65, 'http://riverisland.scene7.com/is/image/RiverIsland/408680_main?$CrossSellProductPage300$&locale=en'),
('Hat', 'color: black', 34, 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/HUF-Box-Logo-Snapback-Hat-_248681-front.jpg'),
('Glasses', 'type: hipster', 44, 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=176835491'),
('Shoes', 'type: High Top', 100, 'http://images.vans.com/is/image/Vans/EE3BLK-HERO?$356x356$'),
('Socks', 'color: black', 10, 'http://statics.suitsupply.com/images/products/Socks/medium/Socks__O603_Suitsupply_Online_Store_1.jpg');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Orders Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    completed BOOLEAN
);

-- INSERT INTO orders (userid, completed) VALUES
-- (1, false),
-- (2, false);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Cart Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    orderid INTEGER REFERENCES orders(id),
    productid INTEGER REFERENCES products(id)
);

-- INSERT INTO cart (orderid, productid) VALUES
-- (1, 3),
-- (1, 4),
-- (1, 2),
-- (1, 5),
-- (2, 1),
-- (2, 5);

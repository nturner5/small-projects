DROP TABLE IF EXISTS products; 

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
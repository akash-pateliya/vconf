drop database vconf;
create database vconf;
use vconf;
create table admins (
    AdminId integer primary key auto_increment,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100),
    phone varchar(20),
    created_on timestamp default CURRENT_TIMESTAMP
);
insert into admins (firstName, lastName, email, password, phone)
values (
        'test',
        'test',
        'test@vconf.com',
        '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        '+123456789'
    );
create table users (
    userId integer primary key auto_increment,
    companyName varchar(50),
    companyAddress varchar(250),
    email varchar(50),
    username varchar(20),
    password varchar(150),
    contactNo varchar(20),
    status ENUM('active', 'not-active', 'suspended', 'block') default 'not-active',
    createdOn timestamp default CURRENT_TIMESTAMP
);
alter table users AUTO_INCREMENT = 1001;
insert into users (
        companyName,
        companyAddress,
        email,
        username,
        password,
        contactNo
    )
values(
        'testName',
        'testAddress',
        'test@vconf.com',
        'test',
        'test',
        '123456789'
    );
create table segments (
    segmentId integer primary key auto_increment,
    segmentName varchar(30)
);
create table manufacturers (
    manufacturerId integer primary key auto_increment,
    manufacturerName varchar(30),
    segmentId integer,
    FOREIGN KEY (segmentId) REFERENCES segments (segmentId)
);
create table variants (
    variantId integer primary key auto_increment,
    variantName varchar(30),
    unitPrice decimal(10, 2),
    manufacturerId integer,
    segmentId integer,
    FOREIGN KEY (segmentId) REFERENCES segments (segmentId),
    FOREIGN KEY (manufacturerId) REFERENCES manufacturers (manufacturerId)
);
create table orders (
    orderId integer primary key auto_increment,
    userId integer,
    placedOn date,
    orderState ENUM(
        'PLACED',
        'IN-PROCESS',
        'DISPATCHED',
        'DILIVERED',
        'CANCELLED'
    ),
    orderComments varchar(1024),
    Amount float,
    created_on timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId)
);
alter table orders AUTO_INCREMENT = 10001;
create table orderDetails (
    orderDetailsId integer primary key auto_increment,
    orderId integer,
    userId integer,
    varientId integer,
    unitPrice DECIMAL(10, 2),
    quantity integer,
    tax float,
    totalAmount decimal(10, 2),
    orderDate timestamp,
    orderTime timestamp,
    FOREIGN KEY (orderId) REFERENCES orders(orderId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (varientId) REFERENCES variants(variantId)
);
DELIMITER $$ CREATE PROCEDURE `addVehicles`(
    IN segment_name varchar(30),
    IN manufacturer_name varchar(30),
    IN variant_name varchar(30),
    IN unit_price decimal(10, 2)
) BEGIN IF getSegmentId(segment_name) IS NULL THEN
insert into segments (segmentName)
values(segment_name);
END IF;
IF getManufacturerId(manufacturer_name) IS NULL THEN
insert into manufacturers (manufacturerName, segmentId)
values(manufacturer_name, getSegmentId(segment_name));
END IF;
IF getVariantId(variant_name) IS NULL THEN
insert into variants (
        variantName,
        unitPrice,
        manufacturerId,
        segmentId
    )
values(
        variant_name,
        unit_price,
        getManufacturerId(manufacturer_name),
        getSegmentId(segment_name)
    );
END IF;
END $$ DELIMITER;
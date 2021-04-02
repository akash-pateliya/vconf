drop database vconf;
create database vconf;
use vconf;
create table admins (
    adminId integer primary key auto_increment,
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
INSERT INTO `vconf`.`segments` (`segmentName`) VALUES ('Small Car');
INSERT INTO `vconf`.`segments` (`segmentName`) VALUES ('Compact Car');
INSERT INTO `vconf`.`segments` (`segmentName`) VALUES ('Sedan');
INSERT INTO `vconf`.`segments` (`segmentName`) VALUES ('SUV');
INSERT INTO `vconf`.`segments` (`segmentName`) VALUES ('Luxury Car');
create table manufacturers (
    manufacturerId integer primary key auto_increment,
    manufacturerName varchar(30),
    segmentId integer,
    FOREIGN KEY (segmentId) REFERENCES segments (segmentId)
);
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Maruti Suzuki', '1');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Maruti Suzuki', '2');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Renault', '1');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Renault', '2');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Tata', '1');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Tata', '2');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Hyundai', '1');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Hyundai', '2');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Ford', '1');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Ford', '2');
INSERT INTO `vconf`.`manufacturers` (`manufacturerName`, `segmentId`) VALUES ('Toyota', '2');


create table variants (
    variantId integer primary key auto_increment,
    variantName varchar(30),
    unitPrice decimal(10, 2),
    manufacturerId integer,
    segmentId integer,
    imageName varchar(250),
    FOREIGN KEY (segmentId) REFERENCES segments (segmentId),
    FOREIGN KEY (manufacturerId) REFERENCES manufacturers (manufacturerId)
);
create table orders (
    orderId integer primary key auto_increment,
    userId integer,
    orderState ENUM(
        'PLACED',
        'IN-PROCESS',
        'DISPATCHED',
        'DILIVERED',
        'CANCELLED'
    ),
    orderComments varchar(250),
    createdOn timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId)
);
alter table orders AUTO_INCREMENT = 10001;
insert into orders(userId, orderState, orderComments)
values (1001, 'PLACED', 'please try to ship asap !');
create table orderDetails (
    orderDetailsId integer primary key auto_increment,
    orderId integer,
    variantId integer,
    unitPrice DECIMAL(10, 2),
    quantity integer,
    tax float,
    totalAmount decimal(10, 2),
    orderDate date,
    orderTime time,
    FOREIGN KEY (orderId) REFERENCES orders(orderId),
    FOREIGN KEY (variantId) REFERENCES variants(variantId)
);

-- Get order details
SELECT A.orderId,
    C.username,
    D.variantName,
    B.unitPrice,
    B.quantity,
    B.tax,
    B.totalAmount,
    B.orderDate,
    B.orderTime
FROM orders A,
    orderDetails B,
    users C,
    variants D
where A.orderId = B.orderId
    and A.userId = C.userId
    and D.variantId = B.variantId
    and B.orderId = 10001;

CREATE TABLE `specifications` (
	Mileage varchar(25),
    fuelType enum('Diesel', 'Petrol', 'CNG'),
    engineDisplacement varchar(10),
    seatingCapacity varchar(5),
    transmissionType enum('Manual', 'Automatic', 'Continuously Variable Transmission'),
    bootSpace varchar(10),
    fuelTankCapacity varchar(10),
    serviceCost varchar(10)
);

CREATE TABLE `interior` (
	id integer primary key auto_increment,
    variantId int,
	leatherSeats boolean default false,
    leatherSteeringWheel boolean default false,
    digitalMeter boolean default false,
    outsideTemperatureDisplay boolean default false,
    heightAdjustableDriverSeat boolean default false,
    additionalFeatures varchar(250),
    FOREIGN KEY (variantId) REFERENCES variants (variantId)
);

CREATE TABLE `exterior` (
	id integer primary key auto_increment,
    variantId int,
	fogLights boolean default false,
    powerAdjustableMirror boolean default false,
    rainSensingWiper boolean default false,
    wheelCovers boolean default false,
    alloyWheels boolean default false,
    sunRoof boolean default false,
    tyreSize varchar(25),
    tyreType varchar(50),
    additionalFeatures varchar(250),
    FOREIGN KEY (variantId) REFERENCES variants (variantId)
);

delimiter //
CREATE FUNCTION getSegmentId(segment_name varchar(30)) returns int
READS SQL DATA
DETERMINISTIC
BEGIN
	DECLARE ID int;
    select segmentId into ID from segments where segmentName = segment_name;
    return ID;
END //
delimiter ;

delimiter //
CREATE FUNCTION getManufacturerId(manufacturer_name VARCHAR(30), segment_id int) returns int
READS SQL DATA
DETERMINISTIC
BEGIN
	DECLARE ID int;
    select manufacturerId into ID from manufacturers where manufacturerName = manufacturer_name and segmentId = segment_id;
    return ID;
END //
delimiter ;

delimiter //
CREATE FUNCTION getVariantId(variant_name varchar(30)) returns int
READS SQL DATA
DETERMINISTIC
BEGIN
	DECLARE ID int;
    select variantId into ID from variants where variantName = variant_name;
    return ID;
END //
delimiter ;

DELIMITER $$ 
CREATE PROCEDURE `addVehicle`(
    IN segment_name varchar(30),
    IN manufacturer_name varchar(30),
    IN variant_name varchar(30),
    IN unit_price decimal(10, 2),
    IN image_name varchar(250)
) BEGIN IF getSegmentId(segment_name) IS NULL THEN
insert into segments (segmentName)
values(segment_name);
END IF;
IF getManufacturerId(manufacturer_name, getSegmentId(segment_name)) IS NULL THEN
insert into manufacturers (manufacturerName, segmentId)
values(manufacturer_name, getSegmentId(segment_name));
END IF;
IF getVariantId(variant_name) IS NULL THEN
insert into variants (
        variantName,
        unitPrice,
        manufacturerId,
        segmentId,
        imageName
    )
values(
        variant_name,
        unit_price,
        getManufacturerId(manufacturer_name, getSegmentId(segment_name)),
        getSegmentId(segment_name),
        image_name
    );
END IF;
END $$

DELIMITER ;

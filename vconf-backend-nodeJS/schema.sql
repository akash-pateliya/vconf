create table admins (
    AdminID integer primary key auto_increment,
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
    userID integer primary key auto_increment,
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
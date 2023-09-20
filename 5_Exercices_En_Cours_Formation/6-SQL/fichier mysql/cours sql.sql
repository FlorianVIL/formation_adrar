	CREATE database if not exists testdb;
    use testdb;
    drop database if exists testdb;
    show databases;
    create user"alice"@"localhost"identified by"P@ssw0rd";
   
    grant create on *.* to "alice"@"localhost" with grant option;
    show grants for "alice"@"localhost";
    flush privileges;
    
    
    
    create database if not exists exodb;
    use exodb;
    create user"bob"@"localhost"identified by "P@ssw0rd";
	select * from mysql.user;
    show databases;
    flush privileges;
    show grants for"bob"@"localhost";
    grant all privileges on *.* to "bob"@"localhost";
    show grants for "bob"@"localhost";
    
    use exodb;
    create table users(
    id int primary key not null auto_increment,
    name varchar(100),
    email varchar(255) not null,
    birthday date
    );
    alter table users
    add firstname varchar(100)after name;
    create index iname on users (name);
    
    create table employes(iname
    id int not null,
    nom varchar(100) not null,
    email varchar(100) not null unique,
    age int not null check (age>=18),
    salaire decimal(18,2)default 3000.00,
    primary key(id)
    );
    
    insert into users (`name`,firstname,email)
    value ('florian', 'vilatte','florian.vilatte.31@gmail.com'),
    ('McCornmick','Kenny','Kenny^mccormick.com'),
    ('Marsh','Stan','stan@marsh.com'),
    ('Garrison','Herbert','herbert@garrison.com');
    
    update users
    set birthday = '1997-08-13';
	
    update users
    set email = 'eric.cartman@south-park.com'
    where `name`='Cartman' and firstname='Eric';
    
    
    
    
drop database if exists bamazon;
create database bamazon;

use bamazon;

create table products(
id int not null auto_increment,
item varchar (50) null,
department varchar (50) null,
price int not null,
stock int not null,
primary key (id)
);

insert into products(item, department, price, stock)
values ("shoe", "apparel", 20, 10);

insert into products(item, department, price, stock)
values ("shelf", "furniture", 35, 5);

insert into products(item, department, price, stock)
values ("earphones", "electronics", 15, 26);

insert into products(item, department, price, stock)
values ("speaker", "electronics", 50, 17);

insert into products(item, department, price, stock)
values ("white t-shirt", "apparel", 5, 200);

insert into products(item, department, price, stock)
values ("chair", "furniture", 20, 10);

insert into products(item, department, price, stock)
values ("hat", "apparel", 25, 19);

insert into products(item, department, price, stock)
values ("laptop", "electronics", 400, 11);

insert into products(item, department, price, stock)
values ("flashdrive", "electronics", 18, 400);

insert into products(item, department, price, stock)
values ("belt", "apparel", 10, 60);

select * from products;
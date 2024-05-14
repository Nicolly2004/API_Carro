CREATE DATABASE dbApiCarros;

USE dbApiCarros;

CREATE TABLE Carros 
(
   codigo int primary key auto_increment,
   modelo varchar(30),
   placa varchar(7)
);

insert into Carros(modelo,placa) values('Fusca azul','DDD000');
insert into Carros(modelo,placa) values('Camaro marelo','FFF326');
select * from Carros;
CREATE DATABASE employeedb;

--\c into employeedb

CREATE TABLE employee(
    e_id SERIAL PRIMARY KEY,
    last_name VARCHAR(20),
    first_name VARCHAR(20),
    salary MONEY,
    dept VARCHAR(30)
);
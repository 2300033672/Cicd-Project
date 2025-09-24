CREATE DATABASE IF NOT EXISTS sdpdbs24;
USE sdpdbs24;

CREATE TABLE IF NOT EXISTS admin_table (
  username VARCHAR(50) PRIMARY KEY,
  password VARCHAR(50) NOT NULL
);

INSERT INTO admin_table (username, password)
VALUES ('admin','Admin@123');

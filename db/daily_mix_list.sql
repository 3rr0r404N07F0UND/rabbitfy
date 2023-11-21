-- Active: 1675296913043@@127.0.0.1@3307@rabbitfy
CREATE TABLE
  `daily_mix_list` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    mix_name CHAR(100) NOT NULL,
    img VARCHAR(255) NOT NULL,
    mix_desc VARCHAR(255) NOT NULL
  );
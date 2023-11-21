-- Active: 1675296913043@@127.0.0.1@3307@rabbitfy
CREATE TABLE
  `album_list` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    album_name CHAR(100) NOT NULL,
    singer_name CHAR(100) NOT NULL,
    album_img VARCHAR(255) NOT NULL
  );
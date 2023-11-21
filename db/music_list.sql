-- Active: 1675296913043@@127.0.0.1@3307@rabbitfy
CREATE TABLE
  `music_list` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    music_name CHAR(100) NOT NULL,
    singer_name CHAR(100) NOT NULL,
    top INT,
    img VARCHAR(255) NOT NULL,
    music_src VARCHAR(255) NOT NULL
  );
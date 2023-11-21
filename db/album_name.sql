-- Active: 1675296913043@@127.0.0.1@3307@rabbitfy
CREATE TABLE
  `aimyon list` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    music_name CHAR(100) NOT NULL,
    singer_name CHAR(100) DEFAULT 'aimyon' NOT NULL,
    img VARCHAR(255) NOT NULL,
    music_src VARCHAR(255) NOT NULL
  );
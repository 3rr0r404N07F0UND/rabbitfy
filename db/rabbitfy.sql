-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.11.1-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 rabbitfy.aimyon list 구조 내보내기
CREATE TABLE IF NOT EXISTS `aimyon list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL DEFAULT 'aimyon',
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.aimyon list:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.album_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `album_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `album_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `album_img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.album_list:~4 rows (대략적) 내보내기
INSERT INTO `album_list` (`id`, `album_name`, `singer_name`, `album_img`) VALUES
	(1, '맛있는 파스타가 있다고 들어서', 'Aimyon', '1.webp'),
	(2, 'forever you', 'ZARD', '2.webp'),
	(3, 'It\'s Raining After All', 'TUYU', '3.jpeg'),
	(4, 'Night Dancer', 'imase', '4.webp'),
	(5, 'rye', 'kano', '5.jpeg');

-- 테이블 rabbitfy.daily_mix_1 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_1:~1 rows (대략적) 내보내기
INSERT INTO `daily_mix_1` (`id`, `music_name`, `singer_name`, `top`, `img`, `music_src`) VALUES
	(1, '사랑을 전하고 싶다든가', 'Aimyon', NULL, '1.webp', '1.mp3');

-- 테이블 rabbitfy.daily_mix_2 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_2:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.daily_mix_3 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_3:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.daily_mix_4 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_4:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.daily_mix_5 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_5` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_5:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.daily_mix_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_mix_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mix_name` char(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `mix_desc` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.daily_mix_list:~7 rows (대략적) 내보내기
INSERT INTO `daily_mix_list` (`id`, `mix_name`, `img`, `mix_desc`) VALUES
	(1, 'Daily Mix 1', 'DailyMix1.jpg', 'IU, ZARD'),
	(2, 'Daily Mix 2', 'DailyMix2.jpg', 'IU, ZARD'),
	(3, 'Daily Mix 3', 'DailyMix3.jpeg', 'IU, ZARD'),
	(4, 'Daily Mix 4', 'DailyMix4.jpeg', 'IU, ZARD'),
	(5, 'Daily Mix 5', 'DailyMix5.jpeg', 'IU, ZARD'),
	(6, 'Daily Mix 6', './img/testingImg.jpeg', 'IU, ZARD'),
	(7, 'Daily Mix 7', './img/testingImg.jpeg', 'IU, ZARD');

-- 테이블 rabbitfy.iu 구조 내보내기
CREATE TABLE IF NOT EXISTS `iu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.iu:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.ive 구조 내보내기
CREATE TABLE IF NOT EXISTS `ive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.ive:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.library_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `library_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `library_name` char(100) NOT NULL,
  `maker_name` char(100) NOT NULL,
  `img_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.library_list:~4 rows (대략적) 내보내기
INSERT INTO `library_list` (`id`, `library_name`, `maker_name`, `img_src`) VALUES
	(1, 'SIA', 'SIA', 'dev-jeans.png'),
	(2, 'ZARD play list', 'CDR', '2.jpeg'),
	(3, 'IVE', 'min woo', '3.jpg'),
	(4, 'IU', 'SIA', '4.jpg');

-- 테이블 rabbitfy.music_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `music_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  `album` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.music_list:~28 rows (대략적) 내보내기
INSERT INTO `music_list` (`id`, `music_name`, `singer_name`, `top`, `img`, `music_src`, `album`) VALUES
	(1, '사랑을 전하고 싶다든가', 'Aimyon', NULL, '1.webp', '1.mp3', NULL),
	(2, '너는 록을 듣지 않아', 'Aimyon', NULL, '2.webp', '2.mp3', NULL),
	(3, '사랑꽃', 'Aimyon', NULL, '3.webp', '3.mp3', NULL),
	(4, '흔들리는 마음', 'ZARD', NULL, '4.webp', '4.mp3', 'forever you'),
	(5, '황혼에 보잘것없는 이야기를 했던 그날을 떠올리는 때를', 'Aimyon', NULL, '5.webp', '5.mp3', '맛있는 파스타가 있다고 들어서'),
	(6, '봄날', 'Aimyon', NULL, '5.webp', '6.mp3', '맛있는 파스타가 있다고 들어서'),
	(7, '시가렛', 'Aimyon', NULL, '5.webp', '7.mp3', '맛있는 파스타가 있다고 들어서'),
	(8, '안녕을 말하는 오늘에', 'Aimyon', NULL, '5.webp', '8.mp3', '맛있는 파스타가 있다고 들어서'),
	(9, '아침 해', 'Aimyon', NULL, '5.webp', '9.mp3', '맛있는 파스타가 있다고 들어서'),
	(10, '벌거벗은 마음', 'Aimyon', NULL, '5.webp', '10.mp3', '맛있는 파스타가 있다고 들어서'),
	(11, '마시멜로', 'Aimyon', NULL, '5.webp', '11.mp3', '맛있는 파스타가 있다고 들어서'),
	(12, '하늘의 푸르름을 아는 사람이여', 'Aimyon', NULL, '5.webp', '12.mp3', '맛있는 파스타가 있다고 들어서'),
	(13, '한여름 밤의 냄새가 난다', 'Aimyon', NULL, '5.webp', '13.mp3', '맛있는 파스타가 있다고 들어서'),
	(14, '포푸리의 잎', 'Aimyon', NULL, '5.webp', '14.mp3', '맛있는 파스타가 있다고 들어서'),
	(15, '빙어', 'Aimyon', NULL, '5.webp', '15.mp3', '맛있는 파스타가 있다고 들어서'),
	(16, '그렇게 살고 있어', 'Aimyon', NULL, '5.webp', '16.mp3', '맛있는 파스타가 있다고 들어서'),
	(17, '역시 비는 내리네\n', 'TUYU', NULL, '6.jpeg', '17.mp3', 'It\'s Raining After All'),
	(18, '이른 여름', 'TUYU', NULL, '6.jpeg', '18.mp3', 'It\'s Raining After All'),
	(19, '바람이 상쾌한 하늘 아래', 'TUYU', NULL, '6.jpeg', '19.mp3', 'It\'s Raining After All'),
	(20, '나팔꽃 질 무렵에', 'TUYU', NULL, '6.jpeg', '20.mp3', 'It\'s Raining After All'),
	(21, '외톨이와 미래', 'TUYU', NULL, '6.jpeg', '21.mp3', 'It\'s Raining After All'),
	(22, '저승으로 가는 버스를 타고 안녕.', 'TUYU', NULL, '6.jpeg', '22.mp3', 'It\'s Raining After All'),
	(23, '태양이 될 수 있을까', 'TUYU', NULL, '6.jpeg', '1.mp3', 'It\'s Raining After All'),
	(24, '선망', 'TUYU', NULL, '6.jpeg', '2.mp3', 'It\'s Raining After All'),
	(25, '비교당하는 아이', 'TUYU', NULL, '6.jpeg', '3.mp3', 'It\'s Raining After All'),
	(26, 'Rock 한 너와 작별이야', 'TUYU', NULL, '6.jpeg', '4.mp3', 'It\'s Raining After All'),
	(27, '눈물이 마르다', 'TUYU', NULL, '6.jpeg', '5.mp3', ' It\'s Raining After All'),
	(28, 'NIGHT DANCER', 'imase', NULL, '7.webp', '6.mp3', 'NIGHT DANCER');

-- 테이블 rabbitfy.sia 구조 내보내기
CREATE TABLE IF NOT EXISTS `sia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.sia:~1 rows (대략적) 내보내기
INSERT INTO `sia` (`id`, `music_name`, `singer_name`, `top`, `img`, `music_src`) VALUES
	(1, '사랑을 전하고 싶다든가', 'Aimyon', NULL, '1.webp', '1.mp3');

-- 테이블 rabbitfy.sia_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `sia_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.sia_list:~0 rows (대략적) 내보내기

-- 테이블 rabbitfy.singer_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `singer_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `singer_name` char(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.singer_list:~6 rows (대략적) 내보내기
INSERT INTO `singer_list` (`id`, `singer_name`, `img`) VALUES
	(1, 'Aimyon', 'aimyon.jpeg'),
	(2, 'TUYU', 'tuyu.jpg'),
	(3, 'IU', 'iu.jpeg'),
	(4, 'ZARD', 'zard.avif'),
	(5, 'imase', 'imase.jpeg'),
	(6, 'kano', 'kano.jpeg'),
	(7, '조대룡', 'backgroundImg_testing.jpg');

-- 테이블 rabbitfy.zard_play_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `zard_play_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` char(100) NOT NULL,
  `singer_name` char(100) NOT NULL,
  `top` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `music_src` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 rabbitfy.zard_play_list:~0 rows (대략적) 내보내기

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

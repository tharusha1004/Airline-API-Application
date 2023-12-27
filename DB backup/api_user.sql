-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 29, 2022 at 04:18 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_user`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_users`
--

DROP TABLE IF EXISTS `api_users`;
CREATE TABLE IF NOT EXISTS `api_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `api_usage` int(11) DEFAULT NULL,
  `api_key` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `api_users`
--

INSERT INTO `api_users` (`id`, `created_at`, `updated_at`, `api_usage`, `api_key`, `email`, `f_name`, `host`, `l_name`, `status`) VALUES
(1, '2022-09-02 13:42:33', '2022-09-25 11:59:04', 70, 'IlkFQbjcMEqMjfqar2CAduSm6Uaf6RBwQrB4AQ6Mwa5Frau4WR', 'janith@gmail.com', 'Janith', 'http://localhost:3000', 'Kavinda', b'1'),
(4, '2022-09-02 13:47:39', '2022-09-02 13:47:39', 0, 'NpvEPlf6ZIXElTJUQ7C1OBkY1YRtOwC9bXDsdWKxaGt1gcysDH', 'tharusha@gmail.com', 'Tharusha', '127.0.0.1', 'Perera', b'1'),
(5, '2022-09-24 23:48:10', '2022-09-24 23:48:10', 0, '9KCIoBYwILsrv0XsX94o90kav4EZPE2q43ERyFl3XR42St8Zlb', 'janith.kavinda3003@gmail.com', 'Janith', '127.0.0.1', 'Disanayake', b'1'),
(6, '2022-09-24 23:56:03', '2022-09-24 23:59:35', 1, '6zBPK3d6tz5PLOm02fNmHDib2XvOaOWNmdQv5pbn27JnOe1ryl', 'janithkavinda2003@hotmail.com', 'Janith', '127.0.0.1', 'Disanayake', b'1'),
(7, '2022-09-25 09:29:12', '2022-09-25 09:29:12', 0, '94gkO1u3Eq5ptB7Cr0k7faosExRbRavFv32IaqBQGmrRcTjX91', 'lahiru@gmail.com', 'tharusa', 'https://www.google.com', 'test', b'1'),
(8, '2022-09-25 09:34:11', '2022-09-25 09:34:11', 0, 'uzat0wcgQI4j0q2Wkiw0rJiHG9rtbdtcSnVSu92oqTo6yKwY3c', 'pruthuvi@gmail.com', 'Pruthuvi', 'https://www.youtube.com', 'Silva', b'1'),
(9, '2022-09-25 11:48:56', '2022-09-25 11:48:56', 0, 'vCMwK6bjcteRM0xl6LEkn5nwiI35XpvLk6jzNnURePgj2iQmX3', 'janithkavinda33@gmail.com', 'Janith', 'http://gmail.com', 'Disanayake', b'1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

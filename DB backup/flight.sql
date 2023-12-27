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
-- Database: `flight`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

DROP TABLE IF EXISTS `flights`;
CREATE TABLE IF NOT EXISTS `flights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `aircraft_iata` varchar(255) DEFAULT NULL,
  `airline_iata` varchar(255) DEFAULT NULL,
  `airline_name` varchar(255) DEFAULT NULL,
  `flight_date` date DEFAULT NULL,
  `flight_status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`id`, `created_at`, `updated_at`, `aircraft_iata`, `airline_iata`, `airline_name`, `flight_date`, `flight_status`) VALUES
(28, '2022-09-25 09:19:31', '2022-09-25 09:19:31', 'CCC', 'UUU', 'Noah', '2023-12-12', b'1'),
(27, '2022-09-25 09:16:26', '2022-09-25 09:16:26', 'JJJ', 'KKK', 'Sri lankan airline', '2022-12-12', b'1'),
(29, '2022-09-25 09:22:35', '2022-09-25 09:22:35', 'RRR', 'DDD', 'Tata Airline', '2022-10-12', b'1'),
(26, '2022-09-25 09:12:48', '2022-09-25 09:12:48', 'AA', 'BB', 'emirates', '2022-12-12', b'1'),
(30, '2022-09-25 09:25:38', '2022-09-25 09:25:38', 'LLL', 'PPP', 'NIBM', '2022-12-20', b'1'),
(31, '2022-09-25 11:15:24', '2022-09-25 11:15:24', 'DDD', 'KKK', 'NIBM', '2022-12-12', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `segments`
--

DROP TABLE IF EXISTS `segments`;
CREATE TABLE IF NOT EXISTS `segments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `airport` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `iata` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  `segment_order` int(11) DEFAULT NULL,
  `segment_type` varchar(255) DEFAULT NULL,
  `flights_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK72iwwcaax1bq579fecyqliboq` (`flights_id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `segments`
--

INSERT INTO `segments` (`id`, `created_at`, `updated_at`, `airport`, `city`, `country`, `iata`, `lat`, `lng`, `segment_order`, `segment_type`, `flights_id`) VALUES
(96, '2022-09-25 09:22:35', '2022-09-25 09:22:35', 'Schiphol', ' Amsterdam', 'Netherlands', ' AMS', '52.308613', '4.763889', 2, 'arrival', 29),
(95, '2022-09-25 09:22:35', '2022-09-25 09:22:35', 'John F Kennedy Intl', 'New York', 'United States', 'JFK', '40.639751', '-73.778925', 1, 'departure', 29),
(92, '2022-09-25 09:16:26', '2022-09-25 09:16:26', 'Heathrow', 'London', 'United Kingdom', 'LHR', '51.4775', '-0.461389', 2, 'arrival', 27),
(30, '2022-09-24 14:54:12', '2022-09-24 14:54:12', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(29, '2022-09-24 14:54:12', '2022-09-24 14:54:12', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(39, '2022-09-24 20:24:47', '2022-09-24 20:24:47', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(37, '2022-09-24 20:23:54', '2022-09-24 20:23:54', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(38, '2022-09-24 20:23:54', '2022-09-24 20:23:54', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(40, '2022-09-24 20:24:47', '2022-09-24 20:24:47', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(35, '2022-09-24 14:59:12', '2022-09-24 14:59:12', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(36, '2022-09-24 14:59:12', '2022-09-24 14:59:12', 'Milanioum', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(41, '2022-09-24 20:25:27', '2022-09-24 20:25:27', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(42, '2022-09-24 20:25:27', '2022-09-24 20:25:27', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(43, '2022-09-24 20:25:53', '2022-09-24 20:25:53', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(44, '2022-09-24 20:25:53', '2022-09-24 20:25:53', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(45, '2022-09-24 20:41:53', '2022-09-24 20:41:53', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'ABC', '84.428067', '-84.428067', 2, 'arrival', NULL),
(46, '2022-09-24 20:41:53', '2022-09-24 20:41:53', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(47, '2022-09-24 20:42:49', '2022-09-24 20:42:49', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(48, '2022-09-24 20:42:49', '2022-09-24 20:42:49', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(52, '2022-09-24 21:02:10', '2022-09-24 21:02:10', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(51, '2022-09-24 21:02:10', '2022-09-24 21:02:10', NULL, NULL, NULL, 'SLX', NULL, NULL, 0, NULL, NULL),
(53, '2022-09-24 21:02:38', '2022-09-24 21:02:38', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(54, '2022-09-24 21:02:38', '2022-09-24 21:02:38', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(55, '2022-09-24 21:02:59', '2022-09-24 21:02:59', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(56, '2022-09-24 21:02:59', '2022-09-24 21:02:59', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(57, '2022-09-24 21:08:45', '2022-09-24 21:08:45', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(58, '2022-09-24 21:08:45', '2022-09-24 21:08:45', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(59, '2022-09-24 21:08:59', '2022-09-24 21:08:59', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(60, '2022-09-24 21:08:59', '2022-09-24 21:08:59', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(61, '2022-09-24 21:12:26', '2022-09-24 21:12:26', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(62, '2022-09-24 21:12:26', '2022-09-24 21:12:26', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(65, '2022-09-24 21:19:55', '2022-09-24 21:19:55', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(66, '2022-09-24 21:19:55', '2022-09-24 21:19:55', 'San Fransisco', 'Wellampitiya', 'Sri Lanka', 'AAA', '84.428067', '-84.428067', 2, 'arrival', NULL),
(67, '2022-09-24 21:20:43', '2022-09-24 21:20:43', 'san fransisco', 'Wellampitiya', 'Sri Lanka', 'SLW', '33.636719', '-84.428067', 1, 'departure', NULL),
(68, '2022-09-24 21:20:43', '2022-09-24 21:20:43', 'San Fransisco', 'WellampitiyaAA', 'Sri Lanka', 'AAA', '84.428067', '-84.428067', 2, 'arrival', NULL),
(94, '2022-09-25 09:19:31', '2022-09-25 09:19:31', 'Frankfurt Main', 'Frankfurt', ' Germany', 'FRA', '50.026421', '8.543125', 2, 'arrival', 28),
(93, '2022-09-25 09:19:31', '2022-09-25 09:19:31', 'Charles De Gaulle', '.Paris', 'France', 'CDG', '49.012779', '2.55', 1, 'departure', 28),
(71, '2022-09-24 21:32:37', '2022-09-24 21:32:37', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(72, '2022-09-24 21:32:37', '2022-09-24 21:32:37', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(73, '2022-09-24 21:33:39', '2022-09-24 21:33:39', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(74, '2022-09-24 21:33:39', '2022-09-24 21:33:39', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(75, '2022-09-24 21:34:41', '2022-09-24 21:34:41', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(76, '2022-09-24 21:34:41', '2022-09-24 21:34:41', NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, NULL),
(77, '2022-09-24 21:35:01', '2022-09-24 21:35:01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(78, '2022-09-24 21:35:01', '2022-09-24 21:35:01', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(91, '2022-09-25 09:16:26', '2022-09-25 09:16:26', 'Chicago Ohare Intl', 'Chicago', 'United States', 'ORD', '41.978603', '-87.904842', 1, 'departure', 27),
(90, '2022-09-25 09:12:49', '2022-09-25 09:12:49', 'Capital Intl', 'Beijing', 'China', 'PEK', '40.080111', '116.584556', 2, 'arrival', 26),
(89, '2022-09-25 09:12:49', '2022-09-25 09:12:49', 'Hartsfield Jackson Atlanta Intl', ' Atlanta', ' United States', 'ATL', '33.636719', '-84.428067', 1, 'departure', 26),
(97, '2022-09-25 09:25:38', '2022-09-25 09:25:38', 'Capital Intl', 'Beijing', 'China', ' PEK', '40.080111', '116.584556', 1, 'departure', 30),
(98, '2022-09-25 09:25:38', '2022-09-25 09:25:38', 'Los Angeles Intl', 'Los Angeles', 'United States', 'LAX', '33.942536', '-118.408075', 2, 'arrival', 30),
(99, '2022-09-25 11:15:24', '2022-09-25 11:15:24', 'Male Intl', 'Male', 'Maldives', 'MLE', '4.191833', '73.529128', 1, 'departure', 31),
(100, '2022-09-25 11:15:24', '2022-09-25 11:15:24', 'Los Angeles Intl', 'Los Angeles', 'United States', 'LAX', '33.942536', '-118.408075', 2, 'arrival', 31);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

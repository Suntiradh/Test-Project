-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: database-motor-bike-shop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderItems` text,
  `shippingAddress` text,
  `paymentResult` text,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `itemsPrice` int DEFAULT NULL,
  `shippingPrice` int DEFAULT NULL,
  `totalPrice` int DEFAULT NULL,
  `taxPrice` int DEFAULT NULL,
  `isPaid` tinyint(1) DEFAULT NULL,
  `paidAt` datetime DEFAULT NULL,
  `isDelivered` tinyint(1) DEFAULT NULL,
  `deliveredAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}','{\"id\":\"4HG272400M0818040\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-19T08:04:29Z\"}','PayPal',300,0,345,45,1,'2020-12-19 08:04:30',NULL,NULL,'2020-12-14 14:42:24','2020-12-19 08:04:30',NULL,NULL),(2,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 14:44:37','2020-12-14 14:44:37',NULL,NULL),(3,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 14:56:06','2020-12-14 14:56:06',NULL,NULL),(4,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 15:26:05','2020-12-14 15:26:05',NULL,NULL),(5,'[{\"name\":\"Hot Wheels\",\"image\":\"https://ae01.alicdn.com/kf/Hb43b3aeb889842d59cd844a6f19a0195p/Rims-JOG90-RS100-10-Racing-RRGS.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":10,\"product\":2,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',1500,0,1725,225,NULL,NULL,NULL,NULL,'2020-12-14 15:31:32','2020-12-14 15:31:32',NULL,NULL),(6,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 16:04:05','2020-12-14 16:04:05',NULL,NULL),(7,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 16:07:07','2020-12-14 16:07:07',NULL,NULL),(8,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 16:09:29','2020-12-14 16:09:29',NULL,NULL),(9,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 16:21:53','2020-12-14 16:21:53',NULL,NULL),(10,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',300,0,345,45,NULL,NULL,NULL,NULL,'2020-12-14 16:32:54','2020-12-14 16:32:54',NULL,NULL),(11,'[{\"name\":\"SSK\",\"image\":\"http://www.sfrchain.com/upfiles/201902014248618.jpg\",\"price\":300,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}','{\"id\":\"1J293632WE702573F\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-14T16:34:50Z\"}','PayPal',300,0,345,45,1,'2020-12-14 16:34:53',NULL,NULL,'2020-12-14 16:34:22','2020-12-14 16:34:53',NULL,NULL),(12,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":120,\"countInStock\":10,\"product\":4,\"qty\":4}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}',NULL,'PayPal',480,0,552,72,NULL,NULL,NULL,NULL,'2020-12-14 16:36:34','2020-12-14 16:36:34',NULL,NULL),(13,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":300,\"countInStock\":10,\"product\":3,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}','{\"id\":\"77R27422RS132025H\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-14T16:38:21Z\"}','PayPal',300,0,345,45,1,'2020-12-14 16:38:23',NULL,NULL,'2020-12-14 16:37:53','2020-12-14 16:38:23',NULL,NULL),(14,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":300,\"countInStock\":10,\"product\":3,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}','{\"id\":\"8C063251W0519832K\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-14T16:47:46Z\"}','PayPal',300,0,345,45,1,'2020-12-14 16:47:49',NULL,NULL,'2020-12-14 16:46:45','2020-12-14 16:47:49',NULL,NULL),(15,'[{\"name\":\"Hot Wheels\",\"image\":\"https://ae01.alicdn.com/kf/Hb43b3aeb889842d59cd844a6f19a0195p/Rims-JOG90-RS100-10-Racing-RRGS.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":10,\"product\":2,\"qty\":1}]','{\"fullName\":\"dfdf\",\"address\":\"gdfgdfg\",\"city\":\"gdfgsdf\",\"postalCode\":\"dsfgdsfg\",\"country\":\"dfgdsfgdfg\"}','{\"id\":\"7YW63280LP530164R\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-14T16:52:10Z\"}','PayPal',1500,0,1725,225,1,'2020-12-14 16:52:13',NULL,NULL,'2020-12-14 16:51:46','2020-12-14 16:52:13',NULL,NULL),(16,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":120,\"countInStock\":10,\"product\":4,\"qty\":1}]','{\"fullName\":\"qqqq\",\"address\":\"qqqq\",\"city\":\"qqq\",\"postalCode\":\"2121212\",\"country\":\"qqqq\"}','{\"id\":\"6N0799538M1602746\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T04:13:37Z\"}','PayPal',120,0,138,18,1,'2020-12-15 04:13:40',NULL,NULL,'2020-12-15 04:09:00','2020-12-15 04:13:40',NULL,NULL),(17,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1},{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":20,\"product\":2,\"qty\":6}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',9800,0,11270,1470,NULL,NULL,NULL,NULL,'2020-12-15 14:56:52','2020-12-15 14:56:52',NULL,NULL),(18,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',800,0,920,120,NULL,NULL,NULL,NULL,'2020-12-15 15:02:21','2020-12-15 15:02:21',NULL,NULL),(19,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":20,\"product\":2,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',1500,0,1725,225,NULL,NULL,NULL,NULL,'2020-12-15 15:16:33','2020-12-15 15:16:33',NULL,NULL),(20,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',800,0,920,120,NULL,NULL,NULL,NULL,'2020-12-15 15:17:39','2020-12-15 15:17:39',NULL,NULL),(21,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":20,\"product\":2,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',1500,0,1725,225,NULL,NULL,NULL,NULL,'2020-12-15 15:21:37','2020-12-15 15:21:37',1,NULL),(22,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}',NULL,'PayPal',800,0,920,120,NULL,NULL,NULL,NULL,'2020-12-15 15:23:23','2020-12-15 15:23:23',3,NULL),(23,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}','{\"id\":\"6FC31110PA169731U\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T15:38:23Z\"}','PayPal',800,0,920,120,1,'2020-12-15 15:38:25',NULL,NULL,'2020-12-15 15:36:37','2020-12-15 15:38:25',3,NULL),(24,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}','{\"id\":\"4WW47231XJ0445059\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T15:44:17Z\"}','PayPal',800,0,920,120,1,'2020-12-15 15:44:19',NULL,NULL,'2020-12-15 15:43:29','2020-12-15 15:44:19',3,NULL),(25,'[{\"name\":\"Slim Fit\",\"image\":\"https://www.nicepng.com/png/full/787-7878250_saddlemen-black-profiler-smooth-gel-motorcycle-seat.png\",\"price\":800,\"countInStock\":10,\"product\":1,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}','{\"id\":\"6UC105956C3989548\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T15:49:32Z\"}','PayPal',800,0,920,120,1,'2020-12-15 15:49:34',NULL,NULL,'2020-12-15 15:49:01','2020-12-15 15:49:34',3,NULL),(26,'[{\"name\":\"Poooser\",\"image\":\"https://pierce-images.imgix.net/images/0/0/2/9/0029b5216ccee18f52fa21777ff386a27fde5240_2_2670300_0_10.png\",\"price\":2200,\"countInStock\":100,\"product\":6,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}','{\"id\":\"5C929279B7312021F\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T16:02:58Z\"}','PayPal',2200,0,2530,330,1,'2020-12-15 16:03:00',NULL,NULL,'2020-12-15 16:01:58','2020-12-15 16:03:00',3,NULL),(27,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":20,\"product\":2,\"qty\":1}]','{\"fullName\":\"gdfgdfgd\",\"address\":\"fgdfgdf\",\"city\":\"gdfgdfg\",\"postalCode\":\"dfgdfg\",\"country\":\"dfgdfgd\"}','{\"id\":\"8L410177532356147\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-15T16:19:30Z\"}','PayPal',1500,0,1725,225,1,'2020-12-15 16:19:32',NULL,NULL,'2020-12-15 16:18:34','2020-12-15 16:19:32',3,NULL),(28,'[{\"name\":\"Slim Chain\",\"image\":\"https://i.pinimg.com/originals/93/e8/0d/93e80de78da007c18671147daaba2bab.jpg\",\"price\":500,\"countInStock\":50,\"product\":1,\"qty\":1}]','{\"fullName\":\"iokio,m\",\"address\":\"koiok\",\"city\":\"io,io\",\"postalCode\":\",o,i\",\"country\":\"o,io,m\"}',NULL,'PayPal',500,0,575,75,NULL,NULL,NULL,NULL,'2020-12-17 12:57:45','2020-12-17 12:57:45',1,NULL),(29,'[{\"name\":\"Scocc\",\"image\":\"https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp\",\"price\":1500,\"countInStock\":20,\"product\":2,\"qty\":1},{\"name\":\"Poooser\",\"image\":\"https://pierce-images.imgix.net/images/0/0/2/9/0029b5216ccee18f52fa21777ff386a27fde5240_2_2670300_0_10.png\",\"price\":2200,\"countInStock\":100,\"product\":6,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test address\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'PayPal',3700,0,4255,555,NULL,NULL,NULL,NULL,'2020-12-18 14:05:52','2020-12-18 14:05:52',1,NULL),(30,'[{\"name\":\"P&P Chain\",\"image\":\"https://sc02.alicdn.com/kf/HTB1DzsTRXXXXXckXXXXq6xXFXXX8/228406245/HTB1DzsTRXXXXXckXXXXq6xXFXXX8.jpg_.webp\",\"price\":500,\"countInStock\":41,\"product\":9,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test address\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}','{\"id\":\"6JK72740R8301652A\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-18T14:27:33Z\"}','PayPal',500,0,575,75,1,'2020-12-18 14:27:34',NULL,NULL,'2020-12-18 14:20:10','2020-12-18 14:27:34',1,NULL),(31,'[{\"name\":\" Qima\",\"image\":\"//sc02.alicdn.com/kf/HTB15_lVRFXXXXbjXpXXq6xXFXXXC.jpg_350x350.jpg\",\"price\":159,\"countInStock\":35,\"product\":13,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"Test Address\",\"city\":\"test city\",\"postalCode\":\"25634\",\"country\":\"Thailand\"}',NULL,'Stripe',159,0,183,24,NULL,NULL,NULL,NULL,'2020-12-19 05:14:46','2020-12-19 05:14:46',2,NULL),(32,'[{\"name\":\" Inovação\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoIrC2yJ8PVpF282ogIMCY5Okum7ull48YQ&usqp=CAU\",\"price\":552,\"countInStock\":12,\"product\":15,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"Test Address\",\"city\":\"test city\",\"postalCode\":\"25634\",\"country\":\"Thailand\"}','{\"id\":\"26154902GY958070U\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-19T05:22:54Z\"}','PayPal',552,0,635,83,1,'2020-12-19 05:22:55',NULL,NULL,'2020-12-19 05:16:24','2020-12-19 05:22:55',2,NULL),(33,'[{\"name\":\" Qima\",\"image\":\"//sc02.alicdn.com/kf/HTB15_lVRFXXXXbjXpXXq6xXFXXXC.jpg_350x350.jpg\",\"price\":159,\"countInStock\":35,\"product\":13,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',159,0,183,24,NULL,NULL,NULL,NULL,'2020-12-19 07:58:24','2020-12-19 07:58:24',1,NULL),(34,'[{\"name\":\"P&P Chain\",\"image\":\"https://sc02.alicdn.com/kf/HTB1DzsTRXXXXXckXXXXq6xXFXXX8/228406245/HTB1DzsTRXXXXXckXXXXq6xXFXXX8.jpg_.webp\",\"price\":500,\"countInStock\":41,\"product\":9,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',500,0,575,75,NULL,NULL,NULL,NULL,'2020-12-19 08:07:23','2020-12-19 08:07:23',1,NULL),(35,'[{\"name\":\"JT-Power chain kit \",\"image\":\"https://cdn.webshopapp.com/shops/39401/files/32581608/800x600x2/jt-sprockets-chain-sprocket-kit-for-triumph-speed.jpg\",\"price\":145,\"countInStock\":200,\"product\":12,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',145,0,167,22,NULL,NULL,NULL,NULL,'2020-12-19 08:17:37','2020-12-19 08:17:37',1,NULL),(36,'[{\"name\":\"Hot Wheels\",\"image\":\"https://ae01.alicdn.com/kf/Hb43b3aeb889842d59cd844a6f19a0195p/Rims-JOG90-RS100-10-Racing-RRGS.jpg_Q90.jpg_.webp\",\"price\":500,\"countInStock\":11,\"product\":7,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',500,0,575,75,NULL,NULL,NULL,NULL,'2020-12-19 08:18:25','2020-12-19 08:18:25',1,NULL),(37,'[{\"name\":\"ZHE\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlmrQNSsFSwaCDHYahXr0BrfYdmNdqQrcVQ&usqp=CAU\",\"price\":122,\"countInStock\":45,\"product\":14,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',122,0,140,18,NULL,NULL,NULL,NULL,'2020-12-19 08:19:29','2020-12-19 08:19:29',1,NULL),(38,'[{\"name\":\"JT-Power chain kit \",\"image\":\"https://cdn.webshopapp.com/shops/39401/files/32581608/800x600x2/jt-sprockets-chain-sprocket-kit-for-triumph-speed.jpg\",\"price\":145,\"countInStock\":200,\"product\":12,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}','{\"id\":\"6YB00381B3653225V\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-19T08:21:23Z\"}','PayPal',145,0,167,22,1,'2020-12-19 08:21:23',NULL,NULL,'2020-12-19 08:20:42','2020-12-19 08:21:23',1,NULL),(39,'[{\"name\":\"ZHE\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlmrQNSsFSwaCDHYahXr0BrfYdmNdqQrcVQ&usqp=CAU\",\"price\":122,\"countInStock\":45,\"product\":14,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',122,0,140,18,NULL,NULL,NULL,NULL,'2020-12-19 08:25:45','2020-12-19 08:25:45',1,NULL),(40,'[{\"name\":\"50cc \",\"image\":\"https://ae01.alicdn.com/kf/HTB1OMZcGFXXXXakXFXXq6xXFXXX0/120467426/HTB1OMZcGFXXXXakXFXXq6xXFXXX0.jpg\",\"price\":99,\"countInStock\":36,\"product\":20,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',99,10,124,15,NULL,NULL,NULL,NULL,'2020-12-19 08:30:25','2020-12-19 08:30:25',2,NULL),(41,'[{\"name\":\" Qima\",\"image\":\"//sc02.alicdn.com/kf/HTB15_lVRFXXXXbjXpXXq6xXFXXXC.jpg_350x350.jpg\",\"price\":159,\"countInStock\":35,\"product\":13,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'PayPal',159,0,183,24,NULL,NULL,NULL,NULL,'2020-12-19 08:33:07','2020-12-19 08:33:07',2,NULL),(42,'[{\"name\":\" Inovação\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoIrC2yJ8PVpF282ogIMCY5Okum7ull48YQ&usqp=CAU\",\"price\":552,\"countInStock\":12,\"product\":15,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"test\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',552,0,635,83,NULL,NULL,NULL,NULL,'2020-12-19 08:33:51','2020-12-19 08:33:51',2,NULL),(43,'[{\"name\":\"Slim Chain\",\"image\":\"https://5.imimg.com/data5/PE/WW/MY-14656097/bike-timing-chain-kit-500x500.jpg\",\"price\":500,\"countInStock\":50,\"product\":1,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"562915\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'PayPal',500,0,575,75,NULL,NULL,NULL,NULL,'2020-12-20 02:11:32','2020-12-20 02:11:32',2,NULL),(44,'[{\"name\":\" Inovação\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoIrC2yJ8PVpF282ogIMCY5Okum7ull48YQ&usqp=CAU\",\"price\":552,\"countInStock\":12,\"product\":15,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"562915\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'Stripe',552,0,635,83,NULL,NULL,NULL,NULL,'2020-12-20 02:13:18','2020-12-20 02:13:18',2,NULL),(45,'[{\"name\":\"50cc \",\"image\":\"https://ae01.alicdn.com/kf/HTB1OMZcGFXXXXakXFXXq6xXFXXX0/120467426/HTB1OMZcGFXXXXakXFXXq6xXFXXX0.jpg\",\"price\":99,\"countInStock\":36,\"product\":20,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"562915\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'PayPal',99,10,124,15,NULL,NULL,NULL,NULL,'2020-12-20 02:13:34','2020-12-20 02:13:34',2,NULL),(46,'[{\"name\":\"X-Ring Sprocket\",\"image\":\"https://sc01.alicdn.com/kf/HTB10EhbSVXXXXXnXpXXq6xXFXXXy.jpg_350x350.jpg\",\"price\":555,\"countInStock\":20,\"product\":10,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"562915\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}',NULL,'PayPal',555,0,638,83,NULL,NULL,NULL,NULL,'2020-12-20 02:14:44','2020-12-20 02:14:44',2,NULL),(47,'[{\"name\":\"Michen Toad 5 Tires\",\"image\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYwC1oXOL5dXZ2jAFO0STdj6F0_-JMEgPww&usqp=CAU\",\"price\":236,\"countInStock\":23,\"product\":16,\"qty\":1}]','{\"fullName\":\"Test Name\",\"address\":\"562915\",\"city\":\"test city\",\"postalCode\":\"2255212\",\"country\":\"Thailand\"}','{\"id\":\"21R56151WM626930A\",\"status\":\"COMPLETED\",\"update_time\":\"2020-12-20T02:18:38Z\"}','PayPal',236,0,271,35,1,'2020-12-20 02:18:40',NULL,NULL,'2020-12-20 02:18:08','2020-12-20 02:18:40',2,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `countInStock` int DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Slim Chain',300,'Chain DID VX Heavy-Duty Premium X-Ring, high-quality Japanese manufacturing. Gold and Black finish.','https://5.imimg.com/data5/PE/WW/MY-14656097/bike-timing-chain-kit-500x500.jpg',50,'Chain',1),(2,'Scocc',1500,'high quality product','https://ae01.alicdn.com/kf/Heb29d444836e43898b944ca39af5c1f5K/ALconstar-51mm-Ak-Silencer-Pit.jpg_Q90.jpg_.webp',20,'Exhaust',1),(6,'Poooser',2200,'high quality product','https://pierce-images.imgix.net/images/0/0/2/9/0029b5216ccee18f52fa21777ff386a27fde5240_2_2670300_0_10.png',80,'Tires',1),(7,'Hot Wheels',500,'high quality product','https://ae01.alicdn.com/kf/Hb43b3aeb889842d59cd844a6f19a0195p/Rims-JOG90-RS100-10-Racing-RRGS.jpg_Q90.jpg_.webp',11,'Wheels',1),(8,'SPK',410,'Additional design benefit : a small milling in the tooth base of the sprocket guarantees optimal self-cleaning, as the dirt cannot accumulate between the teeth and thus wear the chain and the sprocket so fast.','https://www.rainbowprecisionproducts.com/images/categories/chain-sprocket-bushing-category.jpg',0,'Chain',1),(9,'P&P Chain',500,'Same size as original fitment: front sprocket 17 teeth, rear sprocket 41 teeth, chain 102 links on 520 pitch.','https://sc02.alicdn.com/kf/HTB1DzsTRXXXXXckXXXXq6xXFXXX8/228406245/HTB1DzsTRXXXXXckXXXXq6xXFXXX8.jpg_.webp',41,'Chain',1),(10,'X-Ring Sprocket',555,'In reality, the fitments are interchangeable, specify the version you want in the options (a smaller front sprocket and/or larger rear sprocket give shorter gearing).','https://sc01.alicdn.com/kf/HTB10EhbSVXXXXXnXpXXq6xXFXXXy.jpg_350x350.jpg',20,'Chain',1),(12,'JT-Power chain kit ',145,'Top-quality chain and sprocket kit, Japanese quality for guaranteed longevity and durability.','https://cdn.webshopapp.com/shops/39401/files/32581608/800x600x2/jt-sprockets-chain-sprocket-kit-for-triumph-speed.jpg',200,'Chain',1),(13,' Qima',159,'17 inch chrome motorcycle wheel alloy rim ','//sc02.alicdn.com/kf/HTB15_lVRFXXXXbjXpXXq6xXFXXXC.jpg_350x350.jpg',35,'Wheels',1),(14,'ZHE',122,'for racing motorcycle  \nAluminum Alloy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlmrQNSsFSwaCDHYahXr0BrfYdmNdqQrcVQ&usqp=CAU',45,'Wheels',1),(15,' Inovação',552,'ITS-140 Stainless Steel CNC Machining Parts 16\" Sport Motorcycle Rim ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoIrC2yJ8PVpF282ogIMCY5Okum7ull48YQ&usqp=CAU',50,'Wheels',1),(16,'Michen Toad 5 Tires',236,' it maintains a more consistent volume of negative space where water can disperse. This translates into more confident wet-weather cornering and emergency braking throughout the life of the tire. ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYwC1oXOL5dXZ2jAFO0STdj6F0_-JMEgPww&usqp=CAU',23,'Tires',1),(17,'Power Rain Race',224,'The tire compound and the “fountain” tread design maximizes water clearance to improve traction and performance.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrNdJEFDK0AJL2gB45-mLQhWnkhq3xukPLw&usqp=CAU',10,'Tires',1),(18,'Enlop’s KR189,',134,'Official Rain Tires of the MotoAmerica, Moto2, Moto3, and Canadian Superbike Series. The KR Rain Series ','https://www.dunlopracing.com/wp-content/uploads/2018/11/rains-tires.png',16,'Tires',1),(19,'KYN',1490,'51mm Universal Motorcycle Exhaust Pipe with Removable DB Killer Slip-On Modified Exhaust Muffler Scooter Dirt Bike Muffler Pipe for Street Bike','https://images-na.ssl-images-amazon.com/images/I/61MbqUMmgnL._AC_SY355_.jpg',20,'Exhaust',1),(20,'50cc ',99,' Exhaust Muffler with moved blow-down silencer /Mute pit bike dirt bike motorcross pipe use','https://ae01.alicdn.com/kf/HTB1OMZcGFXXXXakXFXXq6xXFXXX0/120467426/HTB1OMZcGFXXXXakXFXXq6xXFXXX0.jpg',36,'Exhaust',1),(21,'Dirt Bike',139,'1.5-2\'\' Motorcycle Exhaust Muffler Slip on DB Killer Black','https://image.pushauction.com/0/0/10b5cbae-09d7-450b-ae8f-74751c34ba8d/86f61645-f55e-4f5d-9767-b0a5d9626dfb.jpg',0,'Exhaust',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@example.com','$2b$08$0xblntWZIIpiI5g/bZSpIObUZrT9w6ZALyrFhtpsvM9ixHgfI4Dbe','Dean',1,'2020-12-15 01:58:44','2020-12-20 08:15:04'),(2,'terst@exgm.com','$2b$08$WUd.fm30k/gLUsDcLTeXw.aQOho9bYfap6tuvOhUak2lZalk71212','Motor',0,'2020-12-15 04:37:39','2020-12-20 08:42:04'),(3,'aaa@hota.com','$2b$12$HdW1tJb.TdJHUO3eccFwLOJSxfcLh4NJDPDWwhR0SynWURdu0xlfK','Jooo',0,'2020-12-15 05:33:57','2020-12-15 05:33:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-20 19:41:42
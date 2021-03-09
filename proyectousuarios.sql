-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectousuarios
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `id_type_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_type_product` (`id_type_product`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_type_product`) REFERENCES `type_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_product`
--

DROP TABLE IF EXISTS `type_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_type` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_product`
--

LOCK TABLES `type_product` WRITE;
/*!40000 ALTER TABLE `type_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `type_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nombre` varchar(155) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pasword` varchar(255) NOT NULL,
  `administrador` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'2021-03-03 03:19:12','2021-03-03 03:19:12','Pedro','Gómez','12345@gmail.com','$2b$12$Awo7pKez0z7AJfjjp4tqLelADiIPqgP8ATwIWL8.zHlj0OWo9PTs.',NULL),(2,'2021-03-03 03:21:24','2021-03-03 03:21:24','','wq','','$2b$12$ldNvVR.ekkY3Igtzog7/4OQVFBoRAm1Lh0t0BF3zqLvIuosCthKuO',NULL),(3,'2021-03-03 14:59:45','2021-03-03 14:59:45','quintero','karen','25@gmail.co','$2b$12$b4E/iIv5SC5bYZfs9l2d3OqsH7nEe2Bmi7uwuV7R3/b1j.P4fTfrW',NULL),(12,'2021-03-03 15:41:26','2021-03-03 15:41:26','Pedro','Gómez','0987@gmail.com','$2b$12$IadGQy41Y.ubFAMCoVp2peVFJn3Ym3EVhbnM0SCueS6LOOa/oIDUi',NULL),(13,'2021-03-03 15:41:55','2021-03-03 15:41:55','quintero','pedro','karencita_0202@hotmail.com','$2b$12$ojzOvMGBhrTbSOQW/hTJneI/RjkY9ThQWWlLcgcSOaHwdwArmuA8O',NULL),(16,'2021-03-03 19:19:23','2021-03-03 19:19:23','Pedro','Gómez','983635353@hotmail.com','$2b$12$Vv1MXeUCUzz3P5dBP4y8ieLrAiIgYtJJ2FYYhvGegnSmMWQBBOzMy',NULL),(17,'2021-03-03 19:19:52','2021-03-03 19:19:52','Pedro','Gómez','324562@hotmail.com','$2b$12$OvKGPdDGk4wPRIudJMDHU.BI93efOLpZHDJ6bjFUgZzMJDB4p7uyq',NULL),(19,'2021-03-04 18:13:06','2021-03-04 18:13:06','valdez','ramon','v@gmail.com','$2b$12$SRxci1jmDZmm9wVrHRnEuuO/JeLjCV1WSw.9b2Yan3Rs4fcfsy0kS',NULL),(22,'2021-03-06 14:45:23','2021-03-06 14:45:23','Pedro','Gómez','12@gmail.com','$2b$12$W3XcxrTs9gObCverj.wznu0jV4/gBdy8tvu3igRRpXG11Stv4Zz3W',NULL),(23,'2021-03-06 14:46:34','2021-03-06 14:46:34','Pedro','Gómez','9@gmail.com','$2b$12$eMGiru.9HVIp.Tct5Cb.qu0SnOy/fPqNTUOfJW7fOSd39Tusmnvs.',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09  7:44:33

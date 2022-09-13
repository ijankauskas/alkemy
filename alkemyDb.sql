-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alkemy
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'prueba','/imagenes/prueba.js');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas-series`
--

DROP TABLE IF EXISTS `peliculas-series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliculas-series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2` (`genero_id`),
  CONSTRAINT `FK_3_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas-series`
--

LOCK TABLES `peliculas-series` WRITE;
/*!40000 ALTER TABLE `peliculas-series` DISABLE KEYS */;
INSERT INTO `peliculas-series` VALUES (6,'/imagen/prueba.jpg',1,'prueba update\n','0000-00-00'),(7,'/imagen/prueba.jpg',1,'harry potter 2','0000-00-00'),(8,'/imagen/prueba.jpg',1,'prueba update\n','0000-00-00');
/*!40000 ALTER TABLE `peliculas-series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaje_pelicula-serie`
--

DROP TABLE IF EXISTS `personaje_pelicula-serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personaje_pelicula-serie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pelicula_id` int(11) NOT NULL,
  `personaje_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2` (`pelicula_id`),
  KEY `FK_3` (`personaje_id`),
  CONSTRAINT `FK_2` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas-series` (`id`),
  CONSTRAINT `FK_3` FOREIGN KEY (`personaje_id`) REFERENCES `personajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaje_pelicula-serie`
--

LOCK TABLES `personaje_pelicula-serie` WRITE;
/*!40000 ALTER TABLE `personaje_pelicula-serie` DISABLE KEYS */;
/*!40000 ALTER TABLE `personaje_pelicula-serie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personajes`
--

DROP TABLE IF EXISTS `personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  `peso` int(11) NOT NULL,
  `historia` varchar(1000) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personajes`
--

LOCK TABLES `personajes` WRITE;
/*!40000 ALTER TABLE `personajes` DISABLE KEYS */;
INSERT INTO `personajes` VALUES (6,'/imagen/prueba2.jpg',30,80,'prueba 5',NULL),(7,'/imagen/prueba2.jpg',20,50,'prueba 5',NULL),(8,'/imagen/prueba.jpg',25,0,'prueba','ignacio'),(9,'/imagen/prueba.jpg',25,72,'prueba','ignacio');
/*!40000 ALTER TABLE `personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `contraseña` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'ignacio.jankauskas60@gmail.com','nacho123'),(3,'ignacio.jankauskas60@gmail.com','nacho123'),(4,'ijankauskas@gmail.com','nacho123');
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

-- Dump completed on 2022-09-13 12:52:33

-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.7.33


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema clientes
--

CREATE DATABASE IF NOT EXISTS clientes;
USE clientes;

--
-- Definition of table `calificaciones`
--

DROP TABLE IF EXISTS `calificaciones`;
CREATE TABLE `calificaciones` (
  `cal_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cal_nombre` varchar(250) NOT NULL,
  `cal_correo` varchar(250) NOT NULL,
  `cal_calificacion` int(10) unsigned NOT NULL DEFAULT '5',
  `cal_observacion` varchar(250) DEFAULT NULL,
  `cal_contacto` varchar(100) DEFAULT '',
  PRIMARY KEY (`cal_id`),
  UNIQUE KEY `Index_2` (`cal_correo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calificaciones`
--

/*!40000 ALTER TABLE `calificaciones` DISABLE KEYS */;
INSERT INTO `calificaciones` (`cal_id`,`cal_nombre`,`cal_correo`,`cal_calificacion`,`cal_observacion`,`cal_contacto`) VALUES 
 (1,'Adela','zetasys777@gmail.com',3,'',''),
 (2,'Adela','adelaocampo@gmail.com',4,'','');
/*!40000 ALTER TABLE `calificaciones` ENABLE KEYS */;


--
-- Definition of table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `usu_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(45) NOT NULL,
  `usu_user` varchar(45) NOT NULL,
  `usu_pass` varchar(45) NOT NULL,
  PRIMARY KEY (`usu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`usu_id`,`usu_nombre`,`usu_user`,`usu_pass`) VALUES 
 (1,'Ezequiel Portillo','eze','123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

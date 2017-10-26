SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database for project
--

CREATE DATABASE html5 DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_bin;

USE html5;

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=0 ;

--
-- Table structure for table `adds`
--

CREATE TABLE IF NOT EXISTS `adds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `folder_id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  `content` VARCHAR( 2000 ) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `folder_id` (`folder_id`),
  KEY `folder_id_2` (`folder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=0 ;

--
-- Constraints for table `adds`
--
ALTER TABLE `adds`
  ADD CONSTRAINT `adds_ibfk_1` FOREIGN KEY (`folder_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Data for demo
--

insert into categories values (null , 'PHP');
insert into categories values (null , 'Java');
insert into categories values (null , 'Java JDBC');
insert into categories values (null , 'Maven');
insert into categories values (null , 'Build tools');
insert into categories values (null , 'Javascript');
insert into categories values (null , 'CSS3');
insert into categories values (null , 'HTML5');


INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'Autoloader', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'JSON Creation', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'Final everything ', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'Conditional compilation', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'Prepared statements', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'Transactions', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'Multi module project', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'Documentation site', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'Gulp', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'MAKE', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'jQuery', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'Prototypal inheritance', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'Box model', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'Media queries', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'Semantic tags', '<div> Desc </div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'Head section', '<div> Desc </div>');

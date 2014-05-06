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

insert into categories values (null , 'food');
insert into categories values (null , 'entertainment');
insert into categories values (null , 'sport');
insert into categories values (null , 'education');
insert into categories values (null , 'fun');
insert into categories values (null , 'school');
insert into categories values (null , 'college');
insert into categories values (null , 'children');
insert into categories values (null , 'cars');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '1',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '2',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '3',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '4',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '5',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '6',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '7',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '8',  'file 9', '<div> Ad 9</div>');

INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 1', '<div> Ad 1</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 2', '<div> Ad 2</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 3', '<div> Ad 3</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 4', '<div> Ad 4</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 5', '<div> Ad 5</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 6', '<div> Ad 6</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 7', '<div> Ad 7</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 8', '<div> Ad 8</div>');
INSERT INTO  `adds` (`id` , `folder_id` , `name`, `content` ) VALUES (NULL ,  '9',  'file 9', '<div> Ad 9 </div>');

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database for project
--

--CREATE DATABASE celtra DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_bin;

--USE celtra;

--
-- Table structure for table `folders`
--

CREATE TABLE IF NOT EXISTS `folders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=0 ;



--
-- Table structure for table `ads`
--

CREATE TABLE IF NOT EXISTS `ads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `folder_id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  KEY `folder_id` (`folder_id`),
  KEY `folder_id_2` (`folder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=0 ;


--
-- Constraints for table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `ads_ibfk_1` FOREIGN KEY (`folder_id`) REFERENCES `folders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Data for demo
--

insert into folders values (null , 'folder 1');
insert into folders values (null , 'folder 2');
insert into folders values (null , 'folder 3');
insert into folders values (null , 'folder 4');
insert into folders values (null , 'folder 5');
insert into folders values (null , 'folder 6');
insert into folders values (null , 'folder 7');
insert into folders values (null , 'folder 8');
insert into folders values (null , 'folder 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '1',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '2',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '3',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '4',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '5',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '6',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '7',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '8',  'file 9');

INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 1');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 2');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 3');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 4');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 5');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 6');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 7');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 8');
INSERT INTO  `ads` (`id` , `folder_id` , `name` ) VALUES (NULL ,  '9',  'file 9');

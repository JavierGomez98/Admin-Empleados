-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-08-2021 a las 04:00:53
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `employeesdatabase`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `name`) VALUES
(1, 'Administración'),
(2, 'Financiera'),
(3, 'Compras'),
(4, 'Infraestructura'),
(5, 'Operación'),
(6, 'Talento Humano'),
(7, 'Servicios Varios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conditions`
--

CREATE TABLE `conditions` (
  `id` int(11) NOT NULL,
  `condition` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `conditions`
--

INSERT INTO `conditions` (`id`, `condition`) VALUES
(1, 'Activo'),
(2, 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `flag` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `name`, `flag`) VALUES
(1, 'Colombia', 'colombia'),
(2, 'Estados Unidos', 'estados_unidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `otherNames` varchar(50) DEFAULT NULL,
  `firstLastName` varchar(20) DEFAULT NULL,
  `secondLastName` varchar(20) DEFAULT NULL,
  `email` varchar(300) NOT NULL,
  `countryEmployment` int(11) DEFAULT NULL,
  `idType` int(11) DEFAULT NULL,
  `idNumber` varchar(20) NOT NULL,
  `dateAdmission` datetime DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `condition` int(11) DEFAULT NULL,
  `dateMod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `firstName`, `otherNames`, `firstLastName`, `secondLastName`, `email`, `countryEmployment`, `idType`, `idNumber`, `dateAdmission`, `area`, `condition`, `dateMod`) VALUES
(6, 'PEDRO', 'CASAS', 'MOLINA', 'AZUL', 'pedro.molina@cidenet.com.co', 2, 2, '181951-as', '2021-07-08 16:00:00', 5, 2, '2021-07-31 12:44:37'),
(16, 'JORGE', '', 'JAMES', 'SHAWN', 'jorge.james@cidenet.com.co', 2, 2, '489-a448', '2021-07-30 21:32:14', 1, 1, '2021-07-30 21:33:04'),
(17, 'ANI', '', 'MELODY', 'FORREST', 'ani.melody@cidenet.com.co', 2, 2, '184-123-231', '2021-07-30 00:12:28', 1, 1, '2021-07-30 00:13:00'),
(21, 'JAVIER', '', 'GOMEZ', 'CASTELLANOS', 'javier.gomez@cidenet.com.co', 1, 1, '1090159880', '2021-08-01 20:02:17', 1, 1, '2021-07-31 17:04:23'),
(22, 'JUAN', '', 'PEDRAZA', 'PEREIRO', 'juan.pedraza@cidenet.com.co', 1, 1, '41894123-12', '2021-07-15 20:25:42', 2, 1, '2021-07-31 20:27:35'),
(23, 'EMILIO', 'PINK', 'PATINO', 'SANTAELLA', 'emilio.patino@cidenet.com.co', 1, 1, '184908412', '2021-08-01 20:27:44', 5, 2, '2021-07-31 16:52:10'),
(24, 'PILAR', 'NEILETH', 'GARCES', 'MAYORAL', 'pilar.garces@cidenet.com.co', 2, 3, 'CC1849a1', '2021-07-31 20:28:19', 1, 1, '2021-07-31 20:29:57'),
(25, 'ANGEL', '', 'MEGIAS', 'LUGO', 'angel.megias@cidenet.com.co', 1, 1, '198498849', '2021-07-31 20:30:05', 5, 1, '2021-07-31 20:30:30'),
(26, 'SANTIAGO', '', 'PEREDA', 'CALATAYUD', 'santiago.pereda@cidenet.com.co', 2, 2, '71959235', '2021-07-31 20:30:39', 1, 1, '2021-07-31 20:31:09'),
(27, 'CAMILO', '', 'OBANDO', 'ABIGAIL', 'camilo.obando@cidenet.com.co', 1, 1, '819871081', '2021-07-31 20:34:07', 2, 1, '2021-07-31 20:34:33'),
(28, 'JOSE', '', 'TARAZONA', 'NOLASPEGA', 'jose.tarazona@cidenet.com.co', 1, 1, '1984919811', '2021-07-31 21:20:35', 1, 1, '2021-07-31 21:20:59'),
(29, 'ERIC', '', 'CLAPTON', 'PATRICK', 'eric.clapton@cidenet.com.co', 2, 2, '442517', '2021-07-21 11:05:05', 6, 1, '2021-07-31 11:06:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types_identifications`
--

CREATE TABLE `types_identifications` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `min` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `types_identifications`
--

INSERT INTO `types_identifications` (`id`, `name`, `min`) VALUES
(1, 'Cédula de Ciudadanía', 'C.C.'),
(2, 'Cédula de Extranjería', 'C.E.'),
(3, 'Pasaporte', 'P.'),
(4, 'Permiso Especial', 'P.E.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `idNumber_UNIQUE` (`idNumber`);

--
-- Indices de la tabla `types_identifications`
--
ALTER TABLE `types_identifications`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `types_identifications`
--
ALTER TABLE `types_identifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

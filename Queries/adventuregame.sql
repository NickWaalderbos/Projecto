-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 25 mei 2022 om 08:57
-- Serverversie: 10.4.21-MariaDB
-- PHP-versie: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adventuregame`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'bobby', 'password', 'email@email.com'),
(2, 'weah', 'weah', 'weah@weah.weah'),
(67, 'weah123', '1234', 'we11ah1111@1111.der'),
(68, 'ediaral', 'kaymaz', 'kaymaz@industries.turk'),
(71, 'rgyjtdgftbtfxvtgcw4 0esdf6v dh8re s', 'erdoham', 'duncandewit@isdom.turk'),
(85, 'edisislit', 'ikloog', 'test@test.uc'),
(86, 'bobbyislitter', 'timisweah', 'timisginger@nietcool.de'),
(90, 'kleinetest', 'test', 'tester@tester.test'),
(91, 'ff', 'ff', 'iiiiiiiiiiiiiiiiiiiiii@iiiiiiiiiiiiiiiii.io'),
(96, '///\\\\\\\\@fjg@.com', 'aa', '1f@1f.com'),
(101, '1', '2', '111@weah.de'),
(166, 'admin', 'admin', 'admin@admin2.duncan');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `stage` int(1) NOT NULL,
  `hero` enum('knight','beserker','mage','paladin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `user_info`
--

INSERT INTO `user_info` (`id`, `stage`, `hero`) VALUES
(1, 3, 'knight');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexen voor tabel `user_info`
--
ALTER TABLE `user_info`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

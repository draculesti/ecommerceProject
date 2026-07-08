-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Mixtecatl-DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Mixtecatl-DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Mixtecatl-DB` DEFAULT CHARACTER SET utf8 ;
USE `Mixtecatl-DB` ;

-- -----------------------------------------------------
-- Table `Mixtecatl-DB`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mixtecatl-DB`.`Usuario` (
  `idUsuario` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NOT NULL,
  `Correo` VARCHAR(50) NOT NULL,
  `Contraseña` VARCHAR(50) NOT NULL,
  `Telefono` VARCHAR(45) NOT NULL,
  `Fecha_Registro` DATETIME NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Mixtecatl-DB`.`Platillo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mixtecatl-DB`.`Platillo` (
  `idPlatillo` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Nombre_Platillo` VARCHAR(50) NOT NULL,
  `Categoria` VARCHAR(50) NOT NULL,
  `Precio` DECIMAL(10,2) NOT NULL,
  `Imagen` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idPlatillo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Mixtecatl-DB`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mixtecatl-DB`.`Pedido` (
  `idPedido` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Fecha_Solicitud` DATETIME NOT NULL,
  `Estado_Pedido` VARCHAR(50) NOT NULL,
  `Platillo_idPlatillo` BIGINT(50) NOT NULL,
  `Usuario_idUsuario` BIGINT(50) NOT NULL,
  INDEX `fk_Pedido_Platillo1_idx` (`Platillo_idPlatillo` ASC) VISIBLE,
  PRIMARY KEY (`idPedido`),
  INDEX `fk_Pedido_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Platillo1`
    FOREIGN KEY (`Platillo_idPlatillo`)
    REFERENCES `Mixtecatl-DB`.`Platillo` (`idPlatillo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pedido_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `Mixtecatl-DB`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Mixtecatl-DB`.`Mesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mixtecatl-DB`.`Mesas` (
  `idMesas` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Disponibilidad` TINYINT NOT NULL,
  PRIMARY KEY (`idMesas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Mixtecatl-DB`.`Reservaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mixtecatl-DB`.`Reservaciones` (
  `idReservaciones` INT NOT NULL AUTO_INCREMENT,
  `Fecha_Reservacion` DATETIME NOT NULL,
  `Nombre_Solicitante` VARCHAR(50) NOT NULL,
  `Apellido_Solicitante` VARCHAR(50) NOT NULL,
  `Mesas_idMesas` BIGINT(50) NOT NULL,
  `Usuario_idUsuario` BIGINT(50) NULL,
  PRIMARY KEY (`idReservaciones`),
  INDEX `fk_Reservaciones_Mesas1_idx` (`Mesas_idMesas` ASC) VISIBLE,
  INDEX `fk_Reservaciones_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Reservaciones_Mesas1`
    FOREIGN KEY (`Mesas_idMesas`)
    REFERENCES `Mixtecatl-DB`.`Mesas` (`idMesas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservaciones_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `Mixtecatl-DB`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

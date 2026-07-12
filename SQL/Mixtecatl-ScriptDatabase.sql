-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mixDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mixDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mixDB` DEFAULT CHARACTER SET utf8 ;
USE `mixDB` ;

-- -----------------------------------------------------
-- Table `mixDB`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`usuarios` (
  `idUsuario` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `fechaRegistro` DATETIME NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mixDB`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`pedidos` (
  `idPedido` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `fechaSolicitud` DATETIME NOT NULL,
  `estadoPedido` VARCHAR(50) NOT NULL,
  `usuario_idUsuario` BIGINT(50) NOT NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `fk_pedido_usuario_idx` (`usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mixDB`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mixDB`.`mesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`mesas` (
  `idMesas` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `disponibilidad` TINYINT NOT NULL,
  PRIMARY KEY (`idMesas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mixDB`.`reservaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`reservaciones` (
  `idReservaciones` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `fechaReservacion` DATETIME NOT NULL,
  `nombreSolicitante` VARCHAR(50) NOT NULL,
  `apellidoSolicitante` VARCHAR(50) NOT NULL,
  `mesas_idMesas` BIGINT(50) NOT NULL,
  `usuario_idUsuario` BIGINT(50) NULL,
  PRIMARY KEY (`idReservaciones`),
  INDEX `fk_reservaciones_mesas1_idx` (`mesas_idMesas` ASC) VISIBLE,
  INDEX `fk_reservaciones_usuario1_idx` (`usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_reservaciones_mesas1`
    FOREIGN KEY (`mesas_idMesas`)
    REFERENCES `mixDB`.`mesas` (`idMesas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservaciones_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mixDB`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mixDB`.`platillos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`platillos` (
  `idPlatillo` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `nombrePlatillo` VARCHAR(50) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `imagen` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idPlatillo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mixDB`.`detallePedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mixDB`.`detallePedidos` (
  `idDetalle` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL,
  `precioUnitario` BIGINT(50) NULL,
  `subtotal` BIGINT(50) NULL,
  `platillo_idPlatillo` BIGINT(50) NOT NULL,
  `pedidos_idPedido` BIGINT(50) NOT NULL,
  PRIMARY KEY (`idDetalle`),
  INDEX `fk_detallePedido_platillo1_idx` (`platillo_idPlatillo` ASC) VISIBLE,
  INDEX `fk_detallePedidos_pedidos1_idx` (`pedidos_idPedido` ASC) VISIBLE,
  CONSTRAINT `fk_detallePedido_platillo1`
    FOREIGN KEY (`platillo_idPlatillo`)
    REFERENCES `mixDB`.`platillos` (`idPlatillo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detallePedidos_pedidos1`
    FOREIGN KEY (`pedidos_idPedido`)
    REFERENCES `mixDB`.`pedidos` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

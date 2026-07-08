USE `Mixtecatl-DB`;

-- ===========================
-- USUARIOS
-- ===========================
INSERT INTO Usuario
(Nombre, Correo, Contraseña, Telefono, Fecha_Registro)
VALUES
('Juan Pérez','juan@gmail.com','123456','9511111111','2025-01-05 10:15:00'),
('María López','maria@gmail.com','123456','9511111112','2025-01-08 09:30:00'),
('Carlos Hernández','carlos@gmail.com','123456','9511111113','2025-01-10 14:00:00'),
('Ana Martínez','ana@gmail.com','123456','9511111114','2025-01-12 16:20:00'),
('Luis Ramírez','luis@gmail.com','123456','9511111115','2025-01-18 11:45:00'),
('Fernanda Cruz','fernanda@gmail.com','123456','9511111116','2025-01-22 13:10:00'),
('Miguel Torres','miguel@gmail.com','123456','9511111117','2025-01-25 18:40:00'),
('Daniela Gómez','daniela@gmail.com','123456','9511111118','2025-02-01 12:00:00'),
('Jorge Castillo','jorge@gmail.com','123456','9511111119','2025-02-05 15:00:00'),
('Sofía Morales','sofia@gmail.com','123456','9511111120','2025-02-10 17:30:00');


-- ===========================
-- PLATILLOS
-- ===========================
INSERT INTO Platillo
(Nombre_Platillo, Categoria, Precio, Imagen)
VALUES
('Tlayuda Tradicional','Platillo Principal',120.00,'img/tlayuda.jpg'),
('Mole Negro','Platillo Principal',180.00,'img/mole.jpg'),
('Tasajo Asado','Carnes',170.00,'img/tasajo.jpg'),
('Cecina Enchilada','Carnes',165.00,'img/cecina.jpg'),
('Memelas','Antojitos',80.00,'img/memelas.jpg'),
('Empanadas de Quesillo','Antojitos',75.00,'img/empanadas.jpg'),
('Enmoladas','Platillo Principal',140.00,'img/enmoladas.jpg'),
('Chocolate Oaxaqueño','Bebidas',45.00,'img/chocolate.jpg'),
('Agua de Horchata','Bebidas',35.00,'img/horchata.jpg'),
('Agua de Jamaica','Bebidas',35.00,'img/jamaica.jpg'),
('Chapulines','Entradas',95.00,'img/chapulines.jpg'),
('Quesillo Fundido','Entradas',110.00,'img/quesillo.jpg'),
('Nieves Artesanales','Postres',60.00,'img/nieves.jpg'),
('Flan Casero','Postres',55.00,'img/flan.jpg'),
('Café de Olla','Bebidas',40.00,'img/cafe.jpg');


-- ===========================
-- MESAS
-- ===========================
INSERT INTO Mesas
(Disponibilidad)
VALUES
(1),
(1),
(0),
(1),
(0),
(1),
(1),
(0),
(1),
(1);


-- ===========================
-- PEDIDOS
-- ===========================
INSERT INTO Pedido
(Fecha_Solicitud, Estado_Pedido, Platillo_idPlatillo, Usuario_idUsuario)
VALUES
('2025-03-01 13:00:00','Pendiente',1,1),
('2025-03-01 13:15:00','Preparando',2,2),
('2025-03-01 13:25:00','Entregado',3,3),
('2025-03-02 14:10:00','Entregado',5,4),
('2025-03-02 15:00:00','Cancelado',6,5),
('2025-03-03 12:45:00','Preparando',7,6),
('2025-03-03 13:10:00','Pendiente',8,7),
('2025-03-04 14:20:00','Entregado',10,8),
('2025-03-04 15:15:00','Preparando',11,9),
('2025-03-05 16:00:00','Pendiente',12,10),
('2025-03-05 16:20:00','Entregado',13,1),
('2025-03-06 12:30:00','Preparando',14,2),
('2025-03-06 13:45:00','Pendiente',15,3),
('2025-03-07 14:50:00','Entregado',4,4),
('2025-03-07 15:30:00','Preparando',9,5);


-- ===========================
-- RESERVACIONES
-- ===========================
INSERT INTO Reservaciones
(Fecha_Reservacion,
Nombre_Solicitante,
Apellido_Solicitante,
Mesas_idMesas,
Usuario_idUsuario)
VALUES
('2025-04-01 14:00:00','Juan','Pérez',1,1),
('2025-04-01 15:00:00','María','López',2,2),
('2025-04-02 13:30:00','Carlos','Hernández',3,3),
('2025-04-02 16:00:00','Ana','Martínez',4,4),
('2025-04-03 14:30:00','Luis','Ramírez',5,5),
('2025-04-03 18:00:00','Fernanda','Cruz',6,6),
('2025-04-04 13:00:00','Miguel','Torres',7,7),
('2025-04-04 15:45:00','Daniela','Gómez',8,8),
('2025-04-05 17:00:00','Jorge','Castillo',9,9),
('2025-04-05 19:00:00','Sofía','Morales',10,10);
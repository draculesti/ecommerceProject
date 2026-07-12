USE mixDB;

-- ==========================================
-- USUARIOS
-- ==========================================
INSERT INTO usuarios (nombre, correo, contraseña, telefono, fechaRegistro)
VALUES
('Juan Pérez', 'juan@gmail.com', '123456', '5512345678', '2025-01-15 10:30:00'),
('María López', 'maria@gmail.com', '123456', '5511122233', '2025-01-20 11:15:00'),
('Carlos Sánchez', '123456', '123456', '5522233344', '2025-02-01 09:45:00'),
('Ana Torres', 'ana@gmail.com', '123456', '5533344455', '2025-02-10 16:20:00'),
('Luis Ramírez', 'luis@gmail.com', '123456', '5544455566', '2025-03-05 13:00:00'),
('Fernanda Cruz', 'fernanda@gmail.com', '123456', '5555566677', '2025-03-12 15:40:00'),
('Miguel Herrera', 'miguel@gmail.com', '123456', '5566677788', '2025-04-02 11:25:00'),
('Sofía Morales', 'sofia@gmail.com', '123456', '5577788899', '2025-04-10 09:15:00');

-- ==========================================
-- MESAS
-- ==========================================
INSERT INTO mesas (disponibilidad)
VALUES
(1),
(1),
(0),
(1),
(1),
(0),
(1),
(1),
(0),
(1);

-- ==========================================
-- PLATILLOS
-- ==========================================
INSERT INTO platillos (nombrePlatillo, categoria, precio, imagen)
VALUES
('Hamburguesa Clásica', 'Hamburguesas', 120.00, 'hamburguesa_clasica.jpg'),
('Hamburguesa BBQ', 'Hamburguesas', 145.00, 'hamburguesa_bbq.jpg'),
('Pizza Pepperoni', 'Pizzas', 180.00, 'pizza_pepperoni.jpg'),
('Pizza Hawaiana', 'Pizzas', 185.00, 'pizza_hawaiana.jpg'),
('Tacos al Pastor', 'Tacos', 95.00, 'tacos_pastor.jpg'),
('Tacos de Arrachera', 'Tacos', 130.00, 'tacos_arrachera.jpg'),
('Pasta Alfredo', 'Pastas', 155.00, 'pasta_alfredo.jpg'),
('Ensalada César', 'Ensaladas', 90.00, 'ensalada_cesar.jpg'),
('Refresco', 'Bebidas', 35.00, 'refresco.jpg'),
('Limonada', 'Bebidas', 45.00, 'limonada.jpg'),
('Agua Mineral', 'Bebidas', 40.00, 'agua_mineral.jpg'),
('Pastel de Chocolate', 'Postres', 80.00, 'pastel_chocolate.jpg'),
('Pay de Queso', 'Postres', 75.00, 'pay_queso.jpg');

-- ==========================================
-- PEDIDOS
-- ==========================================
INSERT INTO pedidos (fechaSolicitud, estadoPedido, usuario_idUsuario)
VALUES
('2025-05-01 13:10:00', 'Pendiente', 1),
('2025-05-01 14:20:00', 'Preparando', 2),
('2025-05-02 15:30:00', 'Entregado', 3),
('2025-05-03 12:45:00', 'Cancelado', 1),
('2025-05-04 18:00:00', 'Entregado', 4),
('2025-05-05 20:10:00', 'Pendiente', 5),
('2025-05-06 13:50:00', 'Preparando', 6),
('2025-05-07 19:25:00', 'Entregado', 7),
('2025-05-08 21:00:00', 'Pendiente', 8),
('2025-05-09 17:40:00', 'Entregado', 2);

-- ==========================================
-- RESERVACIONES
-- ==========================================
INSERT INTO reservaciones
(fechaReservacion, nombreSolicitante, apellidoSolicitante, mesas_idMesas, usuario_idUsuario)
VALUES
('2025-06-10 19:00:00', 'Juan', 'Pérez', 1, 1),
('2025-06-10 20:00:00', 'María', 'López', 2, 2),
('2025-06-11 18:30:00', 'Carlos', 'Sánchez', 4, 3),
('2025-06-12 21:00:00', 'Ana', 'Torres', 5, 4),
('2025-06-13 20:00:00', 'Luis', 'Ramírez', 7, 5),
('2025-06-14 19:30:00', 'Fernanda', 'Cruz', 8, 6),
('2025-06-15 18:00:00', 'Miguel', 'Herrera', 10, 7),
('2025-06-16 20:00:00', 'Pedro', 'Gómez', 2, NULL),
('2025-06-17 21:00:00', 'Laura', 'Jiménez', 5, NULL);

-- ==========================================
-- DETALLE PEDIDOS
-- ==========================================
INSERT INTO detallePedidos
(cantidad, precioUnitario, subtotal, platillo_idPlatillo, pedidos_idPedido)
VALUES
-- Pedido 1
(2,120,240,1,1),
(2,35,70,9,1),

-- Pedido 2
(1,180,180,3,2),
(2,45,90,10,2),

-- Pedido 3
(3,95,285,5,3),
(1,80,80,12,3),

-- Pedido 4
(2,155,310,7,4),

-- Pedido 5
(1,90,90,8,5),
(2,35,70,9,5),

-- Pedido 6
(2,145,290,2,6),
(1,75,75,13,6),

-- Pedido 7
(1,185,185,4,7),
(2,40,80,11,7),

-- Pedido 8
(4,95,380,5,8),

-- Pedido 9
(2,130,260,6,9),
(2,45,90,10,9),

-- Pedido 10
(1,120,120,1,10),
(1,80,80,12,10);

SELECT * FROM usuarios;
SELECT * FROM reservaciones;
SELECT * FROM mesas;
SELECT * FROM platillos;
SELECT * FROM pedidos;
SELECT * FROM detallePedidos;
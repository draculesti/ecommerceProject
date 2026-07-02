SHOW DATABASES;
USE `Mixtecatl-DB`;

-- =====================================
-- INSERTS TABLA Usuarios
-- =====================================

INSERT INTO Usuarios (Nombre_Usuario, Correo, Contraseña) VALUES
('Juan Perez', 'juan@mail.com', 'juan123'),
('Maria Lopez', 'maria@mail.com', 'maria123'),
('Carlos Ruiz', 'carlos@mail.com', 'carlos123'),
('Ana Torres', 'ana@mail.com', 'ana123'),
('Luis Garcia', 'luis@mail.com', 'luis123');

-- =====================================
-- INSERTS TABLA Cliente
-- =====================================

INSERT INTO Cliente (Direccion, Fecha_Registro, Usuarios_idUsuarios) VALUES
('Av. Juárez #101', '2026-01-10 09:30:00', 1),
('Calle Hidalgo #205', '2026-01-12 11:00:00', 2),
('Av. Morelos #58', '2026-01-15 14:20:00', 3),
('Calle Reforma #300', '2026-01-18 16:15:00', 4),
('Blvd. Central #450', '2026-01-20 10:45:00', 5);

-- =====================================
-- INSERTS TABLA Platillo
-- =====================================

INSERT INTO Platillo (Nombre_Platillo, Categoria, Precio, Imagen) VALUES
('Tlayuda Oaxaqueña', 'Comida Regional', 180.00, ''),
('Mole Negro', 'Comida Regional', 220.00, ''),
('Enchiladas Verdes', 'Comida Mexicana', 150.00, ''),
('Pozole Blanco', 'Sopa', 170.00, ''),
('Chile Relleno', 'Comida Mexicana', 160.00, '');

-- =====================================
-- INSERTS TABLA Pedido
-- =====================================

INSERT INTO Pedido (Fecha_Solicitud, Estado_Pedido, Cliente_idCliente, Platillo_idPlatillo) VALUES
('2026-02-01 13:00:00', 'Pendiente', 1, 1),
('2026-02-01 13:30:00', 'Preparando', 2, 2),
('2026-02-02 14:15:00', 'Entregado', 3, 3),
('2026-02-03 15:20:00', 'Cancelado', 4, 4),
('2026-02-04 16:00:00', 'Entregado', 5, 5);

-- =====================================
-- INSERTS TABLA Mesas
-- =====================================

INSERT INTO Mesas (Disponibilidad) VALUES
(1),
(1),
(0),
(1),
(0);

-- =====================================
-- INSERTS TABLA Reservaciones
-- =====================================

INSERT INTO Reservaciones (
    Fecha_Reservacion,
    Nombre_Solicitante,
    Apellido_Solicitante,
    Mesas_idMesas
) VALUES
('2026-03-01 18:00:00', 'Juan', 'Perez', 1),
('2026-03-01 19:00:00', 'Maria', 'Lopez', 2),
('2026-03-02 20:00:00', 'Carlos', 'Ruiz', 3),
('2026-03-03 17:30:00', 'Ana', 'Torres', 4),
('2026-03-04 21:00:00', 'Luis', 'Garcia', 5);


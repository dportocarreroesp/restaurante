DROP TABLE IF EXISTS persona;

CREATE TABLE persona (
	codigo SERIAL PRIMARY KEY,
	nombres VARCHAR(100),
	apellidos VARCHAR(100),
	fecha_nacimiento DATE,
	domicilio VARCHAR(100)
);

DROP TABLE IF EXISTS telefono;

CREATE TABLE telefono (
	numero varchar(9) PRIMARY KEY
);

DROP TABLE IF EXISTS persona_telefono;
CREATE TABLE persona_telefono(
	persona_codigo SERIAL,
	telefono_numero varchar(9),
	tipo varchar(20),
	PRIMARY KEY(persona_codigo, telefono_numero)
);
ALTER TABLE persona_telefono ADD FOREIGN KEY (persona_codigo)
REFERENCES persona(codigo)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE persona_telefono ADD FOREIGN KEY (telefono_numero)
REFERENCES telefono(numero)
ON DELETE RESTRICT
ON UPDATE CASCADE;

DROP TABLE IF EXISTS correo_electronico;

CREATE TABLE correo_electronico(
	persona_codigo SERIAL,
	correo varchar(20),
	tipo varchar(20),
	PRIMARY KEY(persona_codigo, correo)
);
ALTER TABLE correo_electronico ADD FOREIGN KEY (persona_codigo)
REFERENCES persona(codigo)
ON DELETE CASCADE
ON UPDATE CASCADE;


INSERT INTO persona VALUES (DEFAULT,'Antonio','Arjona','1970-06-10','calle Arequipa');
INSERT INTO persona VALUES (DEFAULT,'Carlota','Cerezo','1945-05-01','calle Lima');
INSERT INTO persona VALUES (DEFAULT,'Laura','López','1983-03-17','calle Trujillo');
INSERT INTO persona VALUES (DEFAULT,'Pedro','Pérez','1975-09-30','Avenida Independencia');

INSERT INTO telefono VALUES (611111111);
INSERT INTO telefono VALUES (931111111);
INSERT INTO telefono VALUES (913333333);
INSERT INTO telefono VALUES (644444444);

INSERT INTO persona_telefono VALUES (1,611111111, 'trabajo fijo');
INSERT INTO persona_telefono VALUES (1,931111111, 'particular móvil');
INSERT INTO persona_telefono VALUES (3,913333333, 'particular fijo');
INSERT INTO persona_telefono VALUES (4,913333333, 'particular fijo');
INSERT INTO persona_telefono VALUES (4,644444444, 'trabajo móvil');

INSERT INTO correo_electronico VALUES (1,'a@hotmail.com','particular');
INSERT INTO correo_electronico VALUES (1,'a@gmail.com','trabajo');
INSERT INTO correo_electronico VALUES (2,'c@hotmail.com','particular');
INSERT INTO correo_electronico VALUES (3,'l@gmail.com','trabajo');

var express = require('express');
var router = express.Router();

const {Pool} = require('pg');

const pool1 = new Pool({
  user: 'postgres',
  host: '25.29.138.36',
  database: 'restaurante',
  password: '123456789',
  port: 5432,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

const pool2 = new Pool({
  user: 'postgres',
  host: '25.29.134.65',
  database: 'restaurante',
  password: 'postgres',
  port: 5433,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

const pool3 = new Pool({
  user: 'postgres',
  host: '25.29.134.33',
  database: 'restaurante',
  password: '123456789',
  port: 5432,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

const pool4 = new Pool({
  user: 'postgres',
  host: '25.30.112.217',
  database: 'restaurante',
  password: 'postgres',
  port: 5432,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

router.get('/:sucursal', async(req, res) => {
  const { sucursal } = req.params;
  switch(sucursal) {
    case "1":
      pool1
        .query("select * from getProductos($1)",[sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "2":
      pool2
        .query("select * from getProductos($1)",[sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "3":
      pool3
        .query("select * from getProductos($1)",[sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "4":
      pool4
        .query("select * from getProductos($1)",[sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    default:
      console.log("Get Producto: Sucursal no encontrada.")
      break;
  }
});

router.post('/', async(req,res) => {
  const { nombre, precio, descripcion, disponible, id_Categoria, id_Sucursal } = req.body;
  pool
    .query('INSERT INTO persona VALUES (DEFAULT,$1,$2,$3,$4)',[nombres, apellidos, fecha_nacimiento, domicilio])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

router.delete('/:id', async(req, res) => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'agenda',
    password: 'postgres',
    port: 5433,
  })
  pool
    .query("DELETE FROM persona WHERE codigo = $1",[req.params.id])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

router.put('/:id', async(req, res) => {
  const {nombres, apellidos, fecha_nacimiento, domicilio} = req.body
  pool
    .query("UPDATE persona SET nombres = $1, apellidos = $2, fecha_nacimiento = $3, domicilio = $4 WHERE codigo = $5",[nombres, apellidos, fecha_nacimiento, domicilio,req.params.id])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

module.exports = router;
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

router.get('/:fecha&:hora&:sucursal', async(req, res) => {
  const { fecha, hora, sucursal } = req.params
  switch(sucursal) {
    case "1":
      pool1
        .query("select * from getMesasDisponibles($1,$2,$3)", [fecha, hora, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "2":
      pool2
        .query("select * from getMesasDisponibles($1,$2,$3)", [fecha, hora, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "3":
      pool3
        .query("select * from getMesasDisponibles($1,$2,$3)", [fecha, hora, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "4":
      pool4
        .query("select * from getMesasDisponibles($1,$2,$3)", [fecha, hora, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    default:
      console.log("Get Producto: Sucursal no encontrada.")
      break;
  }
});

router.post('/:sucursal', async(req,res) => {
  const { fecha, hora, correoEmpleado, correoPersona, mesa } = req.body;
  const { sucursal } = req.params;
  switch(sucursal) {
    case "1":
      pool1
        .query("select createPedido($1,$2,$3,$4,$5,$6)", [fecha, hora, correoEmpleado, correoPersona, mesa, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "2":
      pool2
        .query("select createPedido($1,$2,$3,$4,$5,$6)", [fecha, hora, correoEmpleado, correoPersona, mesa, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "3":
      pool3
        .query("select createPedido($1,$2,$3,$4,$5,$6)", [fecha, hora, correoEmpleado, correoPersona, mesa, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    case "4":
      pool4
        .query("select createPedido($1,$2,$3,$4,$5,$6)", [fecha, hora, correoEmpleado, correoPersona, mesa, sucursal])
        .then(result => res.send(result))
        .catch(error => console.log(error))
      break;
    default:
      console.log("POST reservacion: Sucursal no encontrada.")
      break;
  }
});

module.exports = router;
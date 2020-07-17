var express = require('express');
var router = express.Router();

const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'agenda',
  password: 'postgres',
  port: 5433,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

router.get('/', async(req, res) => {

  
  pool
    .query("SELECT * FROM persona ORDER BY codigo")
    .then(result => res.send(result))
    .catch(error => console.log(error))
});

router.post('/', async(req,res) => {
  const { nombres, apellidos, fecha_nacimiento, domicilio } = req.body;

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
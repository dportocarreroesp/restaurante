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
    .query("SELECT * FROM correo_electronico ORDER BY persona_codigo")
    .then(result => res.send(result))
    .catch(error => console.log(error))
});

router.post('/', async(req,res) => {
  const { codigo, correo, tipo } = req.body;

  pool
    .query('INSERT INTO correo_electronico VALUES ($1,$2,$3)',[codigo,correo,tipo])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))

});

router.delete('/:id&:correo', async(req, res) => {
  
  pool
    .query("DELETE FROM correo_electronico WHERE persona_codigo = $1 AND correo=$2 ",[req.params.id, req.params.correo])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

router.put('/:id', async(req, res) => {
  pool
    .query("UPDATE correo_electronico SET correo = $1, tipo = $2 WHERE persona_codigo = $3",[correo,tipo,req.params.id])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

module.exports = router;
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
    .query("SELECT * FROM persona_telefono ORDER BY persona_codigo")
    .then(result => res.send(result))
    .catch(error => console.log(error))
  });


router.post('/', async(req,res) => {
  const { codigo, numero, tipo } = req.body;

  pool.query('INSERT INTO telefono VALUES ($1) ON CONFLICT DO NOTHING',[numero], (err, result) => {
      if(err){
          console.log(err)
      }
      pool.query('INSERT INTO persona_telefono VALUES ($1,$2,$3)',[codigo,numero,tipo], (err, result) => {
          if(err){
              console.log(err)
          }
          res.send({status:'ok'})
      })
  })

});

router.delete('/:id&:numero', async(req, res) => {
    pool
      .query("DELETE FROM persona_telefono WHERE persona_codigo = $1 AND telefono_numero = $2",[req.params.id,req.params.numero])
      .then(res.send({status:'ok'}))
      .catch(error => console.log(error))
});

router.put('/:id&:numero', async(req, res) => {
  const {tipo} = req.body

  pool
    .query("UPDATE persona_telefono SET tipo = $1 WHERE persona_codigo = $2 AND telefono_numero = $3",[tipo,req.params.id,req.params.numero])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))
});

module.exports = router;
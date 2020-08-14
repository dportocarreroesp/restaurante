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

router.post('/:id_Sucursal', async(req,res) => {
  const {nombres, apellidoPaterno, apellidoMaterno, fechaNacimiento, correoElectronico, telefono, compania, tipoDocumento, documento,password} = req.body;

  pool
    .query("SELECT createcliente($1,$2,$3,$4,$5,$6,$7, $10, $8, $9)",[nombres,apellidoPaterno,apellidoMaterno,fechaNacimiento,tipoDocumento,documento,correoElectronico,telefono,compania,password])
    .then(res.send({status:'ok'}))
    .catch(error => console.log(error))

    switch(req.params.id_Sucursal) {
      case "1":
        pool1
          .query("SELECT createcliente($1,$2,$3,$4,$5,$6,$7, $10, $8, $9)",[nombres,apellidoPaterno,apellidoMaterno,fechaNacimiento,tipoDocumento,documento,correoElectronico,telefono,compania,password])
          .then(res.send({status:'ok'}))
          .catch(error => console.log(error))
        break;
      case "2":
        pool2
          .query("SELECT createcliente($1,$2,$3,$4,$5,$6,$7, $10, $8, $9)",[nombres,apellidoPaterno,apellidoMaterno,fechaNacimiento,tipoDocumento,documento,correoElectronico,telefono,compania,password])
          .then(res.send({status:'ok'}))
          .catch(error => console.log(error))
        break;
      case "3":
        pool3
          .query("SELECT createcliente($1,$2,$3,$4,$5,$6,$7, $10, $8, $9)",[nombres,apellidoPaterno,apellidoMaterno,fechaNacimiento,tipoDocumento,documento,correoElectronico,telefono,compania,password])
          .then(res.send({status:'ok'}))
          .catch(error => console.log(error))
        break;
      case "4":
        pool4
          .query("SELECT createcliente($1,$2,$3,$4,$5,$6,$7, $10, $8, $9)",[nombres,apellidoPaterno,apellidoMaterno,fechaNacimiento,tipoDocumento,documento,correoElectronico,telefono,compania,password])
          .then(res.send({status:'ok'}))
          .catch(error => console.log(error))
        break;
      default:
        console.log("Get Producto: Sucursal no encontrada.")
        break;
    }
});

module.exports = router;
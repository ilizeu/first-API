const express = require('express')
// Carrerando a biblioteca express

const app = express()
// Carrregando o arquivo Routes

const pong = require('./routes/pong')
app.use('/', pong)
module.exports = app
const express = require('express')
const app = require('../app')
const router = express.Router()
router.get('/ping', (req, res, next) => {
  res.status(200).send('pong')
})
module.exports = router
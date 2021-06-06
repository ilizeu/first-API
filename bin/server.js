const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

//neste exemplo vou usar o express
function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

//definicao da porta que sera utilizada
const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

//se der algum erro no inicio do processo
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)

    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)

    default:
      throw error
  }
}
// escutando a porta
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}

// parte do servidor
const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log(`Servidor iniciado na porta ${port}!`)
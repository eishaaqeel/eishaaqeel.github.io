import app from './app'
import debug from 'debug'
debug('temp:server')
import http from 'http'
import { HttpError } from 'http-errors'

// Normalize port into a number, string, or false
const normalizePort = (val: string) => {
    const port = parseInt(val, 10)
    
    //if port is Not a Number(isNaNi) return val,
    if (isNaN(port)) return val
    //if the port is a number that is >= 0 return port,
    if (port >= 0) return port
    //otherwise retun false
    return false
}

const port = normalizePort(process.env.PORT || '3000') as number
app.set('port', port)

// Event listening for HTTP server 'error' event
const onError = (error: HttpError) => {
    if (error.syscall !== 'listen') throw error

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    // handle specific listen errors with custom messages
    switch(error.code) {
        case 'EACCS':
            console.error(bind + ' requires elevated privileges');
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1)
            break
        default:
            throw error
    }
}

//listener
const onListening = () => {
    //use let because these variables can change
    let addr = server.address()
    let bind = 'pipe ' + addr
    debug('Listening on ' + bind)
}

//start our server
const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

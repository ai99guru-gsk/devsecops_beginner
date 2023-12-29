const http = require('http')
const os = require('os')

console.log('Starting the nodejs http server')

const handler = function(request, response){
    console.log(' Received request from : ', request.connection.remoteAddress)
    response.writeHead(200)
    response.end('You got response from ' + os.hostname() + "\n")
}

http.createServer(handler).listen(8080)
console.log('NodeJS HTTP server is ready...')
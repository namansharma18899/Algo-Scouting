const { log } = require('console');
const WebsocketServer= require('websocket').server;
const http = require('http');
let connection = null;

const httpserver = http.createServer((req, res)=>{

    log('Hey created a http server, whhoooh')
})

const  websocket = new WebsocketServer({
    "httpServer":httpserver
})

websocket.on("request", request => {
    connection = request.accept(null,request.origin)
    connection.on("onopen", ()=> {console.log("Open for servring")})
    connection.on("onclose", ()=> {console.log("Open for closed")})
    connection.on('onmessage', message => {
        console.log(`received message ${message}`)
    })
})

httpserver.listen(8090, () => {

    console.log('Hey listening on 8090')
})


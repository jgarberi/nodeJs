var http = require('http');

const PORT=8080;

//handle request, send response
function handleRequest(request, response){
    response.end('Hallo! ' + request.url);
}

//New server
var server = http.createServer(handleRequest);

//begin...
server.listen(PORT, function(){
    console.log("The server is listening on: %s", PORT);
});

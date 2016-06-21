var Router = require('restify-router').Router;
var restify = require('restify');


function settings(req, res, next) {
  res.send('settings');
  next();
}

function controls(req, res, next) {
  res.send('controls');
  next();
}

var routerInstance = new Router();

// add a route like you would on a restify server instance
routerInstance.get('/settings', settings);
routerInstance.get('/controls', controls);

var server = restify.createServer();
// add all routes registered in the router to this server instance with uri prefix 'admin'
routerInstance.applyRoutes(server, '/admin');

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
})

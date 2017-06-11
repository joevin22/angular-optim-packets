var path = require('path');
var express = require('express');
var request = require('request');
var URLAPI = 'https://node-optim-packets.herokuapp.com/api';

const port = (process.env.PORT || 5000);

var app = express();
 
app.set('port', port);

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('/api', function(req, res) {
  let packets = req.query.packets || '163841689525773';
  request(`${URLAPI}?packets=${packets}`, function (error, response, body) {
    if (error) {
      res.sendStatus(403).send(error);
    } else {
      res.send(body);
    }
  });
});

app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(distDir + 'index.html'));
    });

// Start server
function startServer() {
  app.listen(port, function() {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
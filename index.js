/**
 * Created by ridel1e on 26/09/2016.
 */

'use strict';

const express = require('express'),
      server = express();

server.set('port', 5000);
server.use(express.static(__dirname + '/public'));

server.listen(server.get('port'), function () {
  console.log('server listening on port: ' + server.get('port'));
});


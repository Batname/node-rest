'use strict';

const config = require('config');

function serverMessage (service) {
  return () => console.log(`Server ${service.name} listen on port ${service.port}`);
}

exports.run = () => {
  config.services.forEach(service => {
    if ( service.active ) {
      require(service.name).listen(service.port, serverMessage(service));
    }
  });
};
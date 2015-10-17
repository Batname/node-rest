'use strict';

// open mongo db connection
require('./utils/mongoose');

const services = require('./services');

services.run();
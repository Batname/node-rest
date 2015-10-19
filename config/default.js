'use strict';

const _ = require('lodash');
const activeServices = require('./services/active');

let config = {
    projectRoot: process.cwd(),
    crypto: {
      hash: {
        length:     128,
        // may be slow(!): iterations = 12000 take ~60ms to generate strong password
        iterations: process.env.NODE_ENV == 'production' ? 12000 : 1
      }
    }
};

module.exports = _.merge(config, activeServices);

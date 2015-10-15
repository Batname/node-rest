'use strict';

const _ = require('lodash');
const activeServices = require('./services/active');

let config = {};

module.exports = _.merge(config, activeServices);

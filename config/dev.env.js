'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  env: '"dev"',
  COMMON_SERVICE_HOST: '"http://172.16.9.31:9621"',
  SYSTEM_MANAGE_SERVICE_HOST: '"http://172.16.9.31:2003"',
})

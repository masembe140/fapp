const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const app = express(feathers());
const services = require('./services')
const apphooks =require('./app.hooks')

app.configure(services)









app.hooks(apphooks)
module.exports = app
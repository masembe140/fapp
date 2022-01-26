const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const app = express(feathers());
const services = require('./services')
const apphooks =require('./app.hooks')


// Turn on JSON parser for REST services
app.use(express.json())
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport
app.configure(express.rest())

app.configure(services)

//app.use(express.notFound());







app.hooks(apphooks)
module.exports = app
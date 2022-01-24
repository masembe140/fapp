const {Messages} =  require('./messages.class')
const messagehooks = require('./messages.hooks')
module.exports = function(app){

const options = {}


// Register the message service on the Feathers application

    app.use('/messages', new Messages(options,app));

//accessing message service
const service = app.service('messages')
service.hooks(messagehooks)
}
 require('dotenv').config()
const app = require('./app')
const host = process.env.HOST || 'localhost'
const protocol = process.env.PROTOCOL || 'http'
 const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`Starting Server at  ${protocol}://${host}:${port}`)
})


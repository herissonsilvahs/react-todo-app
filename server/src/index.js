const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./middlewares/cors')

require('./services/MongoDBService.js')

server.use(bodyParser.urlencoded({
  extended: true
}))

server.use(bodyParser.json())

server.use(cors)

require('./routes/todo.js')(server)

server.listen(3000, function () {
  console.log('Running on http://localhost:3000/');
})
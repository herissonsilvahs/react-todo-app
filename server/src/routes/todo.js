const express = require('express')
const todoService = require('../services/todoService')

module.exports = (server) => {
  const router = express.Router()
  server.use('/api/v1/', router)

  todoService.register(router, '/todo/')
}
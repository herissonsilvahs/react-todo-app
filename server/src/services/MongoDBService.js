const mongoose = require('mongoose')

module.exports = mongoose.connect(
  'mongodb://root:h1s2prog@ds125423.mlab.com:25423/todo-app'
)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
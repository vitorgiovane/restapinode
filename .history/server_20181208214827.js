// Iniciando o App
const app = require('express')()
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true }
)
requireDir('./src/models')

const Product = mongoose.model('Product')

// Primeira rota
app.use('/api')

app.listen(3001)
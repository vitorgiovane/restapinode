// const express = 

// Iniciando o App
const app =require('express')

// Iniciando o DB

// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello, Manolo')
})

app.listen(3001)
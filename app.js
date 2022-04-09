const morgan =  require('morgan')
const express = require('express')


//create express app
const app = express()
app.use(morgan('tiny'))

//routes
app.get('/', (req, res)=> res.send({data: "hello world"}));

module.exports = app
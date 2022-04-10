const morgan =  require('morgan')
const express = require('express')
const apiRouter = require('./routes/apiRouter')


//create express app
const app = express()

//logger middleware
app.use(morgan('tiny'))

//routes
app.use('/', apiRouter);

module.exports = app
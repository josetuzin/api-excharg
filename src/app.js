const express = require('express')
const cors = require('cors')
const app = express()

// config
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(express.json()) 

// routes
app.use('/cotizaciones', require('./routes/cotizaciones'))

 
module.exports = app
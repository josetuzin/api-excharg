const express = require('express')
const cors = require('cors')
const app = express()

// config
app.set('port', process.env.PORT || 4000) // para servicio externo 

// middlewares
app.use(cors())
app.use(express.json()) // para que entiendan peticiones json

// routes
app.use('/cotizaciones', require('./routes/cotizaciones'))
// app.use('/api/notes', require('./routes/notes'))

 
module.exports = app
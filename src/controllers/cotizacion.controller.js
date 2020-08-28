const fetch = require('node-fetch')
const axios = require('axios')

const cotizacionController = {}


cotizacionController.getCotizacionDolar = async (req, res) => {
    console.log('cotizacion dolar')
}

cotizacionController.getCotizacionEuro = async (req, res) => {
    console.log('cotizacion euro')
}

cotizacionController.getCotizacionReal = async (req, res) => {
    console.log('cotizacion real')
}

module.exports = cotizacionController
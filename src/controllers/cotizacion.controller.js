const fetch = require('node-fetch')

const cotizacionController = {}

cotizacionController.getCotizacionDolar = async (req, res) => {

    const cotizacion = await fetch('https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=4838|NQCQkXuOq1r9LkiQOZO~uYaOBZDk3GEB')
    .then(response => response.json())
    .then(json => {
        const precio = String((json.result.value).toFixed(2))
        res.send({
            "moneda": 'dolar',
            "valor": precio
        })
    })

}

cotizacionController.getCotizacionEuro = async (req, res) => {
    const cotizacion = await fetch('https://api.cambio.today/v1/quotes/EUR/ARS/json?quantity=1&key=4838|NQCQkXuOq1r9LkiQOZO~uYaOBZDk3GEB')
    .then(response => response.json())
    .then(json => {
        const precio = String((json.result.value).toFixed(2))
        res.send({
            "moneda": 'euro',
            "valor": precio
        })
    })
}

cotizacionController.getCotizacionReal = async (req, res) => {
    const cotizacion = await fetch('https://api.cambio.today/v1/quotes/BRL/ARS/json?quantity=1&key=4838|NQCQkXuOq1r9LkiQOZO~uYaOBZDk3GEB')
    .then(response => response.json())
    .then(json => {
        const precio = String((json.result.value).toFixed(2))
        res.send({
            "moneda": 'real',
            "precio": precio
        })
    })
}

module.exports = cotizacionController
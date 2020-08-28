const { Router } = require('express')

const { 
    getCotizacionDolar,
    getCotizacionEuro,
    getCotizacionReal 
} = require('../controllers/cotizacion.controller.js')

const router = Router()

router.route('/dolar')
    .get(getCotizacionDolar)

router.route('/euro')
    .get(getCotizacionEuro)

router.route('/real')
    .get(getCotizacionReal)

module.exports = router
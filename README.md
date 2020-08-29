# Api-Excharg

Api-Excharg es una api desarrollada con Node.js que propociciona cotizaciones de 3 monedas (dólares, euros y reales), mediante el consumo de una api de terceros. El archivo de variables de entorno (.env), se incluye en el repositorio solamente efectos prácticos.


## Instalación


```bash
$ git clone https://github.com/josetuzin/api-excharg.git
$ cd api-excharg
$ npm install
$ npm start
```

## Uso

Los endpoints disponibles en localhost son:

```bash
http://localhost:4000/cotizaciones/dolar
http://localhost:4000/cotizaciones/euro
http://localhost:4000/cotizaciones/real
```

## Ejemplo

El formato de respuesta al acceder al endpoint formato de respuesta es el siguiente:

```bash
{
  "moneda": "dolar",
  "precio": "73.84"
}
```

## Live demo

Los endpoints disponibles en producción son:

```bash
https://api-excharg.herokuapp.com/cotizaciones/dolar
https://api-excharg.herokuapp.com/cotizaciones/euro
https://api-excharg.herokuapp.com/cotizaciones/real
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
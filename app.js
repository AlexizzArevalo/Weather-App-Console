const argv = require('./config/yargs').argv
const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
require('colors')

const getInfo = async (direccion) => {
    try {
        const coordenadas = await getLugarLatLng(direccion)
        const clima = await getClima(coordenadas.lat, coordenadas.lon)
        return `El clima de ${coordenadas.direcccion} es de: ${clima} °C`.green
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`.red
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)





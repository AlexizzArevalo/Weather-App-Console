const axios = require('axios')

const getLugarLatLng = async (direccion) => {
    let dir = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { 'X-RapidAPI-Key': '26a8980cc9msh391b2bfa484a63cp18469bjsnd23ed509e309' }
    })

    const respuesta = await instance.get()
    if (respuesta.data.Results.length === 0) {
        return {
            err: 'No existe el lugar indicado'
        }
    } else {
        let data = respuesta.data.Results[0]
        if(data.tz === 'MISSING') data = respuesta.data.Results[1]
        return {
            'direcccion': data.name,
            'lat': data.lat,
            'lon': data.lon
        }
    }
}

module.exports = {
    getLugarLatLng
}


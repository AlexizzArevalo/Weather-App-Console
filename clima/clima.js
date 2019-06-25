const axios = require('axios')

const getClima = async (lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cc235c3fc0f79da55c7ae4cfbb82c1c3`)
    if(respuesta.data.main.temp){
        return respuesta.data.main.temp
    }
}

module.exports = {
    getClima
}
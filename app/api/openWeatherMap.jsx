import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=a08daa8f180e98f222adda2671a54931&units=imperial`;

 function getTemp (location) {
    const encodedLocation = encodeURIComponent(location)
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;
        }
    }, function(err) {
        throw new Error(err.response.data.message);
    })
}

module.exports = {
    getTemp: getTemp
}

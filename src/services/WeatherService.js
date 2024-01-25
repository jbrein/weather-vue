import axios from 'axios';

const http = axios.create({
    baseURL : "http://api.openweathermap.org/"
});

const key = "Your API Key here!";

export default {
    getLatLon(zipcode){
        return http.get(`geo/1.0/zip?zip=${zipcode}&appid=` + key);
    },

    getWeather(lat, lon){
        return http.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=` + key);
    }
}
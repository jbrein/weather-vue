import axios from 'axios';

const http = axios.create({
    baseURL : "http://api.openweathermap.org/"
});

const key = "3f6d3f661d95948fa6e3fdeccfa620a7";

export default {
    getLatLon(zipcode){
        return http.get(`geo/1.0/zip?zip=${zipcode}&appid=` + key);
    },

    getWeather(lat, lon){
        return http.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=` + key);
    }
}
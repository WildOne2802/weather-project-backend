import https from "https";
import dotenv from 'dotenv';

dotenv.config();

export function getWeatherForCity(req, res) {
    https.get(process.env.API_URL + "&appid=" + process.env.API_KEY + "&q=" + req.query.name, (response) => {
        if (response.statusCode === 200) {
            response.on("data", (data) => {
                const weatherData = JSON.parse(data);
                res.send(weatherData);
            });
        } else {
            console.log("[getWeatherForCity] API Error");
        }
    });
}

export function getWeatherForCityWithCoordinates(req, res) {
    https.get(process.env.API_URL + "&appid=" + process.env.API_KEY + "&lat=" + req.query.lat + "&lon=" + req.query.lon, (response) => {
        if (response.statusCode === 200) {
            response.on("data", (data) => {
                const weatherData = JSON.parse(data);
                res.send(weatherData);
            });
        } else {
            console.log("[getWeatherForCityWithCoordinates] API Error");
        }
    });
}

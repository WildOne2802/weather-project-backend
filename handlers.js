//change + to ${}
import https from "https";
import dotenv from 'dotenv';
import {getCities, addCity, removeCity} from './mongoDB.js';

import fetch from 'node-fetch';

dotenv.config();

export function getWeatherForCity(req, res) {
    fetch(`${process.env.API_URL}&appid=${process.env.API_KEY}&q=${req.query.name}`).then(response => response.json()).then(response => res.send(response));

    // https.get(process.env.API_URL + "&appid=" + process.env.API_KEY + "&q=" + req.query.name, (response) => {
    //     if (response.statusCode === 200) {
    //         response.on("data", (data) => {
    //             const weatherData = JSON.parse(data);
    //             res.send(weatherData);
    //         });
    //     } else {
    //         res.sendStatus(404);
    //         console.log("[getWeatherForCity] API Error");
    //     }
    // });
}

export function getWeatherForCityWithCoordinates(req, res) {
    fetch(`${process.env.API_URL}&appid=${process.env.API_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`).then(response => response.json()).then(response => res.send(response));
    // https.get(process.env.API_URL + "&appid=" + process.env.API_KEY + "&lat=" + req.query.lat + "&lon=" + req.query.lon, (response) => {
    //     if (response.statusCode === 200) {
    //         response.on("data", (data) => {
    //             const weatherData = JSON.parse(data);
    //             res.send(weatherData);
    //         });
    //     } else {
    //         res.sendStatus(404);
    //         console.log("[getWeatherForCityWithCoordinates] API Error");
    //     }
    // });
}

// export async function getFavourites(req, res) {
//     let result = [];
//     console.log("hey");
//     getCities().then(r => {
//         r.forEach((x) => {
//             console.log("sup");
//             https.get(process.env.API_URL + "&appid=" + process.env.API_KEY + "&q=" + x, (response) => {
//                 if (response.statusCode === 200) {
//                     response.on("data", (data) => {
//                         console.log("dude");
//                         const weatherData = JSON.parse(data);
//                         // res.send(weatherData);
//                         result.push(weatherData);
//                     });
//                 } else {
//                     console.log("[getFavourites] API Error");
//                 }
//             });
//         });
//     });
// }

export function getFavourites(req, res) {
    getCities().then((response) => {
        res.send(response);
    });
}

export function addCityToDatabase(req, res) {
    try {
        addCity(req.query.name).then(() => {
            res.sendStatus(200);
        });
    } catch (e) {
        res.send(e);
    }
}

export function removeCityFromDatabase(req, res) {
    try {
        removeCity(req.query.name).then(() => {
            res.sendStatus(200);
        });
    } catch (e) {
        res.send(e);
    }
}

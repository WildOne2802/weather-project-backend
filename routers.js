import {Router} from "express";
import {
    getWeatherForCity,
    getWeatherForCityWithCoordinates
} from "./handlers.js";

const router = Router();

router.get("/weather/city", getWeatherForCity);


router.get("/weather/coordinates", getWeatherForCityWithCoordinates);

export default router;

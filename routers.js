import {Router} from "express";
import {
    getWeatherForCity,
    getWeatherForCityWithCoordinates,
    getFavourites,
    addCityToDatabase,
    removeCityFromDatabase
} from "./handlers.js";

const router = Router();

router.get("/weather/city", getWeatherForCity);

router.get("/weather/coordinates", getWeatherForCityWithCoordinates);

router.post("/weather/favourites", addCityToDatabase);

router.delete("/weather/favourites", removeCityFromDatabase);

router.get("/weather/favourites", getFavourites);


export default router;

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

router.put("/weather/addCity", addCityToDatabase);

router.delete("/weather/removeCity", removeCityFromDatabase);

router.get("/weather/favourites", getFavourites);


export default router;

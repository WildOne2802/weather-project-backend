import mongoose from 'mongoose';

const handleError = (error) => {
    console.error(error);
};

let schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

let City = mongoose.model('City', schema);

export async function addCity(name) {
    let result;
    let city = new City({
        name: `${name}`
    });

    await city.save((error) => {
            if (error) {
                result = false;
                handleError(error);
            } else {
                result = true;
            }
        }
    );

    return result;
}

export async function getCities() {
    let result;
    await City.find({}, (error, cities) => {
        if (error) {
            handleError(error)
            result = false;
        } else {
            result = [];
            cities.forEach((city) => {
                // console.log(city);
                result.push(city.name);
            });
        }
    });
    return result;
}

export async function removeCity(name) {
    let result;
    await City.deleteOne({name: `${name}`}, (error) => {
        if (error) {
            handleError(error);
            result = false;
        } else {
            result = true;
        }
    });
    return result;
}


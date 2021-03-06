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
    console.log(`addCity ${name}`);
    let result = true;
    let city = new City({
        name: `${name}`
    });

    return city.save((error) => {
            if (error) {
                result = false;
                handleError(error);
            }
        }
    );
}

export async function getCities() {
    console.log(`getCities`);
    let result = []
    const res = await City.find({});
    res.map(x => {
        result.push(x.name)
    });
    return result;
}

export async function removeCity(name) {
    console.log(`removeCity ${name}`);
    let result = true;
    await City.deleteOne({name: `${name}`}, (error) => {
        if (error) {
            handleError(error);
            result = false;
        }
    });
    return result;
}


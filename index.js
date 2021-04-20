import express from "express";
import mongoose from 'mongoose';
import routes from "./routers.js";
import cors from "cors";

const PORT = process.env.PORT;
const CORS_PORT = process.env.CORS_PORT;
// const DB_URL = process.env.DB_URL;

const app = express();
// app.use(allowCrossDomain);
// app.use(cors());
app.use(routes);

async function start() {
    try {
        // await mongoose.connect(DB_URL, {
        //     useNewUrlParser: true,
        //     useFindAndModify: false,
        //     useUnifiedTopology: true
        //});
        // app.listen(CORS_PORT, () => {
        //     console.log(`CORS-enabled web server listening on port ${CORS_PORT}`);
        // });

        app.listen(PORT, () => {
            console.log(`Launched server on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

app.get('/', (req, res) => {
    res.send('Hello world')
})


// app.get('/favourite', (req, res) => {
//     res.json({});
// });


start();

require("dotenv").config();

var express = require('express');
var cors = require("cors");
var cron = require('node-cron');


const CronController = require('./app_cron/controllers/cron.controller');

var cronJob = new CronController();


cron.schedule('1 * * * * *', () => {
    console.log('jalan yuk');
    cronJob.scheduler()
});


const app = express()

app.use(cors());

var corsOption = {
    origin: "http://localhost:13031"
};

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "testing" });
});

// set port, listen for requests
const PORT = process.env.PORT_API;
app.listen(PORT, () => {
    console.log(`Server port ${PORT}.`);
});


module.exports = app;

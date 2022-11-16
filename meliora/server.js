const express = require("express");
const app = express();
require('dotenv').config()

const dbConfig = require("./config/dbConfig"); // call dbConfig

const port = process.env.PORT || 5000;

// console.log(process.env.MONGO_URL) // remove this after you've confirmed it is working

app.listen(port, () => console.log(`Node Express Server Started at ${port}`));
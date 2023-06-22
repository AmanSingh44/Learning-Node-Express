const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
require("dotenv").config();
const app = express();

app.use(express.json())
app.use("/users", router)

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.32s6ewm.mongodb.net/`)
    .then(() => app.listen(process.env.PORT, () => console.log("Database connected sucessfully")))
    .catch((err) => console.log(err));
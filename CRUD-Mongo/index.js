const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const app = express();

app.use(express.json())
app.use("/users", router)

mongoose.connect("mongodb+srv://admin:admin@cluster0.32s6ewm.mongodb.net/")
    .then(() => app.listen(5001, () => console.log("Database connected sucessfully")))
    .catch((err) => console.log(err));
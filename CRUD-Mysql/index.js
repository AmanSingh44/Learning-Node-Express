const express = require('express')
const app = express();
require("dotenv").config()
const contactRoute = require('./Routes/contact')



app.use(express.json())
app.use('/contact/', contactRoute)


app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
})
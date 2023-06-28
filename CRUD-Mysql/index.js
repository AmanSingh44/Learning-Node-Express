const express = require('express')
const app = express();
require("dotenv").config()
    //const contactRoute = require('./Routes/contact')
const r = require('./Routes/user-route')



app.use(express.json())
    //app.use('/contact/', contactRoute)
app.use('/users', r)


app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
})
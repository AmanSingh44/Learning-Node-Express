const mysql = require('mysql')
require("dotenv").config();
const connection = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,

    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'nodecrud'
})

connection.connect((err) => {
    if (err) {
        console.log('conncection error')
    } else {
        console.log('contact db connected')
    }
})


module.exports = connection
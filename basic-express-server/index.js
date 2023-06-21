const express = require("express")
const app = express();
const port = 5000

app.use('/', (req, res) => {
    res.send('Hello World')
})
app.listen(port, () => {
    console.log("Server createed at ", port)
})
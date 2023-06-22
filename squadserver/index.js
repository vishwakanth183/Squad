const express = require('express')
const mangoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
app = express();
app.use(cors())
app.use(express.json())
const routers = require('./routes/indexRoutes')
app.use(routers)


// DEV - process.env.MANGODB_URL

mangoose.connect(process.env.MANGODB_URL).then(() => {
    console.log("Connected to mangoDb")
}).catch(() => {
    console.log("Connection to mangoDb failed")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Welcome to mangoDb Mr.Vishwa")
})
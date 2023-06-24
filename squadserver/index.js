const express = require('express')
const mangoose = require('mongoose')
passport = require("passport");
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
dotenv.config()
require('./middlewares/passport')(passport);
app = express();
app.use(passport.initialize());
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit : "200mb"}))
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
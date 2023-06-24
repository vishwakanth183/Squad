const router = require('express').Router();

app.use('/testRouter',require('./testRouter'))
app.use('/auth',require('./authRouter'))

module.exports = router
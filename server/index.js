
const express = require('express')
const app = express()
const mainRouter = require('./Routes/mainRoutes')
var bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3001, (req, res) => {
    console.log("server has been initialized")
})


app.use('/', mainRouter)

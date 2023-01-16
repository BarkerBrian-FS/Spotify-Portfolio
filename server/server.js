require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//connect to DB
const connectDB = require("./db");
connectDB();

app.use('/spotify/v1', spotify)

app.listen(3001, () => {console.log('Server Started on port 3001')})
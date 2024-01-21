const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true })
app.use(express.json())
const cors = require('cors');
app.use(cors());

const my_mongoose = require('./dbconnect-promise')

const userAPI=require('./controllers.js/UserAPI')
app.use('/user',userAPI)

app.listen(5000, () => { console.log("Express Server started at 5000 port") }) 

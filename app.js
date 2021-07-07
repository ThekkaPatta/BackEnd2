const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module
const cors = require('cors');

const db = require('./database/db')
const register_route = require('./routes/register_route');
const Artist_route = require('./routes/Artist_route');
const app = express();

app.use(express.static("./pictures"));
app.use(express.json());
app.use('/pictures', express.static(__dirname + "/pictures/"))
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(register_route);
app.use(Artist_route);
app.use(Admin_route);
app.use(HireRoute);

app.listen(900);
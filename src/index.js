var express = require('express');
require('./config/dbConfig');
var cors = require('cors');

console.log(process.env.PORT);
var app = express();
var routes = require('./routes');
var port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
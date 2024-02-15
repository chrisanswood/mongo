
var mongoose = require('mongoose');
require('dotenv').config();

var connection = mongoose.connect(process.env.MONGODB_URI);
module.exports = connection; 
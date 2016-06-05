var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGODB_URI ||'mongodb://localhost/survey');

require('./routes')(app);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})
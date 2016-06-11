var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var expressHandlebars = require('express-handlebars'); 

var logger = require("morgan");
var bodyParser = require("body-parser")

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/views'));
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
var hbs = require('express-handlebars').create();
hbs.getPartials().then(function(partials) {
  console.log(partials);
});


require('./routes')(app);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})
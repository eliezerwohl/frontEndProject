var express = require("express");
var app = express()

module.exports = function (app) {

app.get("/", function(req, res) {
	res.render("index")
});

app.get("/demos", function(req, res) {
	res.render("demos")
});



}
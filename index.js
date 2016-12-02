var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

exports.index =  function(req,res) {
	res.redirect('login');
}

exports.Signin = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	res.render('login');
}, function(error) {
	locals.message = error.message;
}

 app.listen(3000);

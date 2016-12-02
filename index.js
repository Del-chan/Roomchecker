var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

exports.index =  function(req,res) {
	res.redirect('login');
}

exports.Signin = function(req, res) {
	res.render('login');
}

 app.listen(3000);

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var builder = require("xmlbuilder");
//var xml = builder.create('Response').ele('Say', 'Hello World').end({pretty:true});
var router = express.Router();
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    var resp = new twilio.TwimlResponse();

        resp.message('Welcome to !');
//        resp.message(' let us know if we can help during your development.', {
//        voice:'woman',
//        language:'en-gb'
    });

	console.log(resp.toString());
	res.type('text/xml');
	res.send(resp.toString());
});

app.listen(port, function(){
    console.log("Magic happens on Port " + port);
});

//router.post('/', function(req, res){
//	var resp = new twilio.TwimlResponse();
//
//        resp.say('Welcome to Twilio!');
//        resp.say('Please let us know if we can help during your development.', {
//        voice:'woman',
//        language:'en-gb'
//    });
//
//	console.log(resp.toString());
//	res.type('text/xml');
//	res.send(resp.toString());
//});

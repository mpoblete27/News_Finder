var express = require("express");
var mongoose = require("mongoose");

//scrapering tools 
var axios = require ("axios");
var cheerio = requir0e("cheerio");

var PORT = 3000
var db = require("./models");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

// Routes

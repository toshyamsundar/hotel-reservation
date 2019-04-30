var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array objects
var reserve = [];
var wait = [];

//routes
app.get("/api/reservation", function (req, res) {
    return res.json(reserve);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(wait);
});

//listen
app.listen(PORT, function () {
    console.log(`listening on PORT: ${PORT}`);
});
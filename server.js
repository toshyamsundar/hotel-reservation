var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

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

//logic
if (reserve.length > 5) {
    //post request
    //add to reserve array
    //prompt user successfully added reservation
} else {
    //add to wait array
    //prompt user on waitlist
}

//listen
app.listen(PORT, function () {
    console.log(`listening on PORT: ${PORT}`);
});
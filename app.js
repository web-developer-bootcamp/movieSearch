var request = require("request");
var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.get("/results", function (req, res) {
    var movieName = req.query.search;
    var urlAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=5e0781f6&s=" + movieName;
    
    request(urlAPI, function (error, response, body) {
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        } else {
            console.log(error);
        }
    })
})

app.get("/", function (req, res) {
    res.render("search");
})

app.get("*", (req, res) => res.send("PAGE NOT FOUND...................."));
app.listen(3000, () => console.log("Movie App Server is started!"));
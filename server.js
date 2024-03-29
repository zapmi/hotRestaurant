// =============================================================
var express = require("express");
var path = require("path");
var apiCall = require("./api.js");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "tableRsvp.html"));
});

app.get("/api/rsvp", function(req, res) {
    
    // console.log(rsvps);
    var test = apiCall.displayExistingRsvps();
    console.log(test);
    return res.json();
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  



// Create New Characters - takes in JSON input
app.post("/api/people", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    characters.push(newreservation);

    res.json(newreservation);
});






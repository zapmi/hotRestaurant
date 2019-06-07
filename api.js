var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hotRestaurant"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log(connection.threadId);
    // displayExistingRsvps();
});

var displayExistingRsvps = function() {
    connection.query("SELECT * FROM people", function (err, res) {
        if (err) throw err;
        console.log(res);
        return res;
    });
 }

 module.exports = {
    displayExistingRsvps: displayExistingRsvps
 }
 

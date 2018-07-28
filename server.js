const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require('http');


var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var PORT = process.env.PORT || 8080;

//DATA

var waitData = [
  {
    customerName: "Bruce Wayne",
    customerEmail: "Batman@gotham.com",
    phoneNumber: "123-456-7890",
    customerID: "Batman"
  }
];

var tableData = [
  {
    customerName: "Dick Grayson",
    customerEmail: "Robin@Gotham.com",
    customerID: "Robin",
    phoneNumber: "123-6543-217"
  }
];


//Routes HTML

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

 //Routes API

 app.get("/api/tables", function(req, res) {
  res.json(tableData);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitData);
});

//
app.post("/api/tables", function(req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body-parser middleware
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitData.push(req.body);
    res.json(false);
  }
});

const handleRequest = function (request, response) {
  response.end('its alive!!' + request.url)
}

const server = http.createServer(handleRequest)

app.listen(PORT, function () {
  console.log('the server is listening on port: ' + PORT)
});

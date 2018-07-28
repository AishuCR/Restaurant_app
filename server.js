const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http= require('http');


var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var PORT = process.env.PORT || 8080; 

//DATA

var waitingArray = [
    {
      customerName: "Bruce Wayne",
      customerEmail: "Batman@gotham.com",
      phoneNumber: "123-456-7890",
      customerID: "Batman"
    }
  ];

  var tableArray = [
    {
      customerName: "Dick Grayson",
      customerEmail: "Robin@Gotham.com",
      customerID: "Robin",
      phoneNumber: "123-6543-217"
    }
  ];
  

//Routes HTML

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });









const handleRequest= function (request, response)
{
    response.end('its alive!!' +request.url)
}

const server= http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log('the server is listening on port: ' + PORT)
});
 
var express = require("express");
var app     = express();
var path    = require("path");
app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname+'/app/index.html'));
});
app.listen(8000);
console.log("Berjalan di 8000");

var express = require('express');
var app = express();

app.configure( function () {
app.use(
    "/",
    express.static(__dirname + '/build')
    );  	
} );

app.listen(3000);

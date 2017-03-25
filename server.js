var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require('express-handlebars');
var methodOverride = require("method-override");

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3030; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//access to public files
app.use(express.static(__dirname + '/public'));
//using method-override
app.use(methodOverride('_method'));
//setting up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./routes/burger-routes.js')(app); 
//require('./routes/burger-html-routes.js')(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
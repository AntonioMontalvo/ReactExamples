//APPLICATION DEPENDENCIES
//our server
var express = require('express');
const app = express();
//we use path for working with files and directory paths
var path = require('path');
//let's require body- parser to parse incoming request bodies in a middleware before our handlers
var bodyParser = require('body-parser');

//CONFIGURE app WITH THE FOLLOWING METHODS
//app.use([path,] callback [, callback...])
//Mounts the specified middleware function or functions at the specified path. Since .css files are static files you have to serve them to the clients. Using the express.static middleware in an Express app. Serve static content for the app from the “public” directory in the application directory. What this means is that this middleware will make available to the app all the files in the public directory. To <link> it in the .html file your path is no longer from the .html file to the .css file but straight from /public in our cas is <link rel="stylesheet" href="/css/school.css">

app.use(express.static(__dirname + '/public'));

// tell express to use this middleware to parse urlencoded bodies. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////
// Our server's possible Routes//
/////////////////////////////////

//app.get(path, callback [, callback ...]); Routes HTTP GET requests to the specified path with the specified callback functions.

//when the server gets "/"
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html')); //sendFile transfers the filefile at the given path with the response, in this case the Home Page.
    console.log("Success, index.html was served");
});


//start listening
app.listen(process.env.PORT || 3000, function() {
    console.log("app listening on port 3000!. Go to http://localhost:3000"); //confirm app is listening
});
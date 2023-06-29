/*
    Node express routing.js
    George Tsang

    Routing refers to determining how an application responds to a client request to a particular endpoint, 
    which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

    Each route can have one or more handler functions, which are executed when the route is matched.

    "body-parser" middleware is used to parse the content of the "POST-ed" request message body section for the server program to process.
    "body-parser" middleware is now part of "express" and no longer requires its own separate download and installation.

    Route definition takes the following structure:

        app.METHOD(PATH, HANDLER)

    Where:

        app is an instance of express
        METHOD is an HTTP request method, in lowercase (app.get handles the GET requests; app.post handles the POST requests)
        PATH is a path on the server
        HANDLER is the function executed when the route is matched

    npm:

        npm install express --save
        
    References:

        https://expressjs.com/en/guide/routing.html
        https://expressjs.com/en/starter/basic-routing.html
*/

var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());                                                        //  support json encoded bodies
app.use(express.urlencoded({ extended: false }));                               //  support encoded bodies
                                                                                //  { extended: false } = use querystring library
                                                                                //  { extended: true } = use qs library

app.get("/", function(req, res) {                                               //  Route 1: localhost:3000: A single slash (/) indicates root/home directory
    res.send(`<h1 style='color: #ff0000;'>The root route/home page responds to your request.</h1>`);
});

app.get("/r2", (req, res) => {                                                  //  Route 2: localhost:3000/r2
    res.send(`<h1 style='color: #00ff00;'>The route #2 endpoint responds to your request.</h1>`);
});

app.get("/r3/:id", (req, res) => {                                              //  Route 3: localhost:3000/r3/anyID: 
    var id = req.params.id;                                                     //  The request paramaters array (req.params) is created by Express to hold incoming 
                                                                                //  values
    res.send(`<h1 style='color: #0000ff;'>The route #3 endpoint received and responds with id of ${id} </h1>`);
});

app.get("/r3/:id/:amount", (req, res) => {                                      //  Route 3: localhost:3000/r3/anyID/anyAmount: 
    var id = req.params.id;                                                     //  The request paramaters array (req.params) is created by Express to hold  
    var amount = req.params.amount;                                             //  multiple incoming values
    res.send(`<h1 style='color: #0000ff;'>The route #3 endpoint received and responds with id of ${id} and amount of $${amount}</h1>`);
});

app.get("/nr", (req, res) => {                                                  //  Not sending response message
    
});

app.get("*", (req, res) => {                                                    //  Route wildcard (*): localhost:3000/undefined endpoint 
    res.send(`<h1 style='color: #ff00ff;'>BAD ROUTE! Fix your URL.</h1>`);
});

app.post("/", (req, res) => {                                                   //  Test POST method by running "express route post.htm" in browser then click submit
    var inputdata = req.body.txtInput;                                          //  Requires body-parser to parse incoming request body and populate the req.body property
    res.send(`You just called the post method with an input value of ${inputdata}`);
});

const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
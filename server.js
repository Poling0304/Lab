const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const session = require('express-session');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// Set up Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
    secret: 'your secret here', // replace with your own secret
    resave: false,
    saveUninitialized: true,
}));

// Set up Handlebars as view engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up main router
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
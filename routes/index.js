const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load the users.json file
const users = require(path.join(__dirname, '../users.json'));

// Landing page route
router.get('/', (req, res) => {
    res.render('landing');
});

// Sign in page route
router.get('/signin', (req, res) => {
    res.render('signin');
});

// Home page route
router.get('/home', (req, res) => {
    // Check if the user is authenticated before displaying the home page
    if (req.session.user) {
        res.render('home', { user: req.session.user });
    } else {
        res.redirect('/signin');
    }
});

// Sign in post request
router.post('/signin', (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    if (users[username] && users[username] === password) {
        req.session.user = username;
        res.redirect('/home');
    } else if (!users[username]) {
        res.render('signin', { error: 'Not a registered username' });
    } else {
        res.render('signin', { error: 'Invalid password' });
    }
});

// Sign out route
router.get('/signout', (req, res) => {
    req.session.user = null;
    res.redirect('/');
});

module.exports = router;
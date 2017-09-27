'use strict';

//START Dependencies
//==================================================================
//==================================================================

//General NPM Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const logger = require('morgan');
const http = require('http');
const socket = require('socket.io');
const cheerio = require('cheerio');
const mma = require('mma');

//Authentication NPM Dependencies
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);
const bcrypt = require('bcrypt');

//Real-Time Server Dependencies & Settings
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socket(server);
const sessionStore = (process.env.PORT ? new MySQLStore({
    host:'',
    user:'',
    password:'',
    database:''
}) : new MySQLStore({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'fightstatsdb'
}));

//Local Dependencies
const db = require('./models');
const html = require('./routes/html')(express,passport,db,path,request,cheerio);
const api = require('./routes/api')(express,passport,db,bcrypt,request,io,mma);

//END Dependencies
//==================================================================

//START Express Setup and Configuration
//==================================================================
//==================================================================

//Pretty prints request and errors to console
app.use(logger('dev'));

//Allows express to translate diffrent types of data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Allows express to parse cookie information
app.use(cookieParser());

//Servers public content such as CSS Javascript required in the HTML files
app.use(express.static(path.join(__dirname,'public')));

//Creates the sessions table that will authenticate user sessions
app.use(session({
    //random string that gets hashed to validate a real session and not a spoof
    secret: 'MMA Fight Stats Created With Passion And Accuracy For The Most Intense MMA Fighter Followers!',
    //saves a new session on every request if needed
    resave: false,
    //database location of saved sessions to avoid having to login everytime 
    //the server is restarted so that it is not stored locally
    store: sessionStore,
    //if the user is not logged in don't save a session or add a cookie
    saveUninitialized: false,
    //To be enabled if using HTTPS
       //cookie: { secure: true }
}));

//Sets up passport authentication with express
app.use(passport.initialize());
app.use(passport.session());
const localStrategy = require('./config/passport/passport-strategy.js')(passport,LocalStrategy,db,bcrypt);

//Configures express to handle all index routes here.
app.use('/',html);

//Configures express to handle all api routes here.
app.use('/api',api);

// Handle 404
app.use(function(req, res) {
    res.status(404).send('404: Not Found');
});

// Handle 500
app.use(function(error, req, res) {
    res.status(500).send('500: Internal Server Error');
});

//END Express Setup and Configuration
//==================================================================

//START Real-Time Server
//==================================================================
//==================================================================

// Starts DB and start listening to the server port
db.sequelize.sync().then(()=>{
    server.listen(PORT,()=>{
        console.log('SERVER STARTED ON PORT ' + PORT);
    });
});

//END Real-Time Server
//==================================================================


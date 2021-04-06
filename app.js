'use strict'

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3003;

const cors = require('cors')

const express = require ('express'),
    session = require('express-session'),
    app = express();


app.use(session({
    secret: 'good vibes',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const appointmentsController = require('./routes/appointments'); 
const eventsController = require('./routes/events'); 

app.use("/", rootController);
app.use('/appointments', appointmentsController);
app.use('/events', eventsController);
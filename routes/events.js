'use strict';

const express = require('express'),
    router = express.Router(),
    eventsModel = require('../models/eventsModel'),
    UsersModel = require('../models/usersModel');


router.get('/', async (req, res, next) => {
    const eventList = await eventsModel.getEventsList();
    res.json(eventList).status(200);
});

router.get('/:event_id', async (req, res) => {
    const { event_id } = req.params;

    const eventData = await eventsModel.getEvents(id);
    res.json(eventData).status(200);

    
        
});



router.post('/add_events', async(req, res, next) => {
    const {title, description, date, time, location} = req.body;

    
    const response = await eventsModel.addEvents(title,description, date, time, location);

    if(response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})

module.exports = router;
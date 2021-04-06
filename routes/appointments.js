'use strict';

const express = require('express'),
    router = express.Router(),
    appointmentsModel = require('../models/appointmentsModel'),
    UsersModel = require('../models/usersModel');


router.get('/', async (req, res, next) => {
    const user_id = 2;
    const appointmentList = await appointmentsModel.getAppointmentsList(user_id);
    res.json(appointmentList).status(200);
});

router.get('/:provider_id', async (req, res) => {
    const { provider_id } = req.params;

    const providerAppointmentData = await appointmentsModel.getProviderAppointments(provider_id);
    res.json(providerAppointmentData).status(200);

    
        
});



router.post('/add_appointments', async(req, res, next) => {
    const {description, date, time, provider_name, location, user_id, provider_id} = req.body;

    
    const response = await appointmentsModel.addAppointments(description, date, time, provider_name, location, user_id, provider_id);

    if(response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})


router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;

    const response = await appointmentsModel.deleteAppointment(id);
    res.sendStatus(200);


})



module.exports = router;
'use strict';

const express = require('express'),
    router = express.Router(),
    appointmentsModel = require('../models/appointmentsModel'),
    //UsersModel = require('../models/usersModel');


router.get('/', async (req, res, next) => {
    const user_id = 2;
    const appointmentList = await appointmentModel.getAppointmentsList(user_id);
    res.json(appointmentList).status(200);
});

router.get('/:appointments_list', async (req, res) => {
    const { id } = req.params;

    const {userAppointmentData} = await appointmentModel.getUserAppointments(users_id);

    const appointmentInfo = {
        ...userAppointmentData,
    }
        
});



router.post('/addAppointments', async(req, res, next) => {
    const { id, description, date, time, provider, location, user_id } = req.body;

    
    const response = await appointmentModel.addAppointments(id, description, date, time, provider, location, user_id);

    if(response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})


router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;

    const response = await appointmentModel.deleteAppointment(id);
    res.sendStatus(200);


})



module.exports = router;
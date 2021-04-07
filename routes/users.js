

const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs'),
    UserModel = require('../models/usersModel')

    router.get("/", async (req, res) => {
        const userData = await UserModel.getUsersList();
        res.json(userData).status(200);
    })


    router.post('/register', async (req, res) => {
        const {provider, first_name, last_name, email, username, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const response = await UserModel.addUser (
            provider,
            first_name,
            last_name,
            email,
            username,
            hash,
        );
        console.log('response here', response)
        if(response.id) {
            res.json(response);
        }else {
            res.send("Error: please try again").status(500);
        }
    });


    router.post('/login', async (req, res) => {
        const { username, password  } = req.body;
        const user = new UserModel(null, null, null, null, username, password);
        const response = await user.login();
        if(!!response.isValid) {
            
            req.session.is_logged_in = response.isValid;
            req.session.user_id = response.user_id;
            req.session.username = response.username;
            res.json('/');
        }else {
            res.sendStatus(403);
        }
    });
    




    
    module.exports = router;
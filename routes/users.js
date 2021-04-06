const { route } = require('.')

const express = require('express'),
    router = express.Router(),
    UserModel = require('../models/usersModel')

    router.get("/", async (req, res) => {
        const userData = await UserModel.getAll();
        res.json(userData).status(200);
    })

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
    




    router.post('/register', async (req, res) => {
        const { boolean, first_name, last_name, email, username, password} = req.body;
        const salt = bycrypt.genSaltSync(10);
        const hash = bycrypt.hashSync(password, salt);
        const response = await UserModel.addUser (
            boolean,
            first_name,
            last_name,
            email,
            username,
            hash,
        );
        if(response.id) {
            res.redirect('/');
        }else {
            res.send("Error: please try again").status(500);
        }
    });

    module.exports = router;
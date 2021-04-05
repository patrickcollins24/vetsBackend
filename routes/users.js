const { route } = require('.')

const express = require('express'),
    router = express.Router(),
    UserModel = require('../models/usersModel')

    router.get("/", async (req, res) => {
        const userData = await UserModel.getAll();
        res.json(userData).status(200);
    })
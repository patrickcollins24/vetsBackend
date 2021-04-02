const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome to VetFo').status(200);
});

module.exports = router;
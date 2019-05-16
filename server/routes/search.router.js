const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${req.query.search}&api_key=${process.env.GIPHY_API_KEY}`)
    .then((response) => {
        console.log('Response from GIPHY GET request:', response.data.data);
        res.send(response.data.data);
    }).catch((error) => {
        console.log('Error in GIPHY GET request:', error);
        res.sendStatus(500);
    });
});

module.exports = router;
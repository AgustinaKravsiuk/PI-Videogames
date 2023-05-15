const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame } = require('../db')

router.get('/', async (req, res) => {
    // const videogamesDB = Videogame.
});

module.exports = router;
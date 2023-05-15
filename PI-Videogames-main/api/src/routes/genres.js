const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require('../db.js');

router.get('/', async (req, res) => {
    try {
        const genresDB = await Genre.findAll(); 
        if(genresDB.length) return res.status(200).json(genresDB);
        const genresAPI = await axios.get(`https://api.rawg.io/api/genres?api_key=${API_KEY}`);
        const leakedGenres = genresAPI.data.results;
        leakedGenres.forEach(async genre => {
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
        })
        const allGenres =  await leakedGenres.map(game => {
            return{
                id: game.id,
                name: game.name,
            }
        });
        return res.status(200).json(allGenres)
    }
    catch(error) {
        return res.status(404).json({error: error.message});
    }
});

module.exports = router;
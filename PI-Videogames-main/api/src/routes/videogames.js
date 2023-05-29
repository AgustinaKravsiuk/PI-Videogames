const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db')
const { gamesSaved, getGameByName, getGameById, validatePostData, postGame } = require('../controllers/controllers')

router.get('/', async(req, res) => {
    const { name } = req.query;
    const allGames = await gamesSaved();
    try{
        if(name){
            const game = await getGameByName(name.toLocaleLowerCase());
            res.status(200).json(game);
        } else {
            res.status(200).json(allGames);
        }
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:idVideogame', async(req, res) => {
    const { idVideogame } = req.params;
    const allGames = await gamesSaved();
    try {
        const game = await getGameById(idVideogame, allGames);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


router.post('/', validatePostData, async(req, res) => {
    const { name, description, platforms, background_image, released, rating } = req.body;
    try {
        const gameCreated = await postGame( name, description, platforms, background_image, released, rating );
        res.status(200).json(gameCreated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
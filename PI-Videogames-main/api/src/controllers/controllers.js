const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db')


const apiInfoClean = (videogame) => {
    return{
        id: videogame.id,
        name: videogame.name,
        description: videogame.description? videogame.description : 'sin descripcion',
        platforms: videogame.platforms.map((platform) => platform.platform.name),
        background_image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((genre) => genre.name)
    };
};

const apiVideogames = async() => { 

    let apiGames = [];

    const responses = await Promise.all([
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    ]);

    responses.forEach((response) => {
        apiGames = apiGames.concat(response.data.results);
    });
    const videogames = apiGames.map((game) => apiInfoClean(game));
 
    return videogames;
};

const dbInfo = async () => {
    const dbVideogames = await Videogame.findAll({
        include:{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }    
        }    
    });    



    let gameMap = dbVideogames.map((videogame) => {
        return{
            id: videogame.id,
            name: videogame.name,
            description: videogame.description? videogame.description : 'sin descripcion',
            platforms: videogame.platforms.map((platform) => platform),
            background_image: videogame.background_image,
            released: videogame.released,
            rating: videogame.rating,
            genres: videogame.genres.map((genre) => genre.name),
            createdInDb: videogame.createdInDb
        };    
    });    
    return gameMap;
};  

const gamesSaved = async () => {
    const apiGames = await apiVideogames();
    const dbVideogames = await dbInfo();
    const allGames = apiGames.concat(dbVideogames);
    return allGames
}; 

const getDbGameByName = async (name) => {
    const games = await Videogame.findAll({
        where:{
            name: {
                [Op.iLike]: `%${name}%`
            }    
        },
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            } 
        }    
    }); 

    

    const gamesFound = games.map((videogame) => {
        return{
        id: videogame.id,
        name: videogame.name,
        description: videogame.description? videogame.description : 'sin descripcion',
        platforms: videogame.platforms?.map((platform) => platform),
        background_image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres?.map((genre) => genre.name),
        createdInDb: videogame.createdInDb
    }
    });
    

    return gamesFound;
};

const getGameByName = async (name) => {
    const dbGames = await getDbGameByName(name);
    const apiReq = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const apiGames = apiReq.data.results.map((game) => apiInfoClean(game));
    const allGames = dbGames.concat(apiGames);


    let allGamesFound = [];

    for (let i = 0; i < 15; i++) {
        allGamesFound.push(allGames[i]);
    }

    if (allGamesFound.length !== 0) {
        return allGamesFound;
    } else {
        throw Error('404 NOT FOUND: please try with other name');
    }
};

const getDbGameById = async (idVideogame) => {
    const dbGame = await Videogame.findOne({
        where:{
            id: idVideogame
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            } 
        }
    });

    const videogame = dbGame;

    const gameFound = {
        id: videogame.id,
        name: videogame.name,
        description: videogame.description? videogame.description : 'sin descripcion',
        platforms: videogame.platforms?.map((platform) => platform),
        background_image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres?.map((genre) => genre.name),
        createdInDb: videogame.createdInDb
    }

    return gameFound;
};

const getGameById = async (idVideogame) => {
    if(Number(idVideogame)){
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        const game = response.data;
        const apiGame = apiInfoClean(game);
        return apiGame;
    }else if(!Number(idVideogame)){
        const dbGame = await getDbGameById(idVideogame);
        return dbGame;
    }else{
        throw Error('404 videogame not found');
    }

};

const validatePostData = (req, res, next) => {
    const { name, description, platforms, background_image, released, rating, genres } = req.body;
    if( !name) {
        return res.status(400).json({ error: 'Please enter a name' });
    } else if (!description) {
        return res.status(400).json({ error: 'Please enter a description' });
    } else if (platforms.length === 0) {
        return res.status(400).json({ error: 'Please enter platforms' });
    } else if (!background_image) {
        return res.status(400).json({ error: 'Please enter a image' });
    } else if (!released) {
        return res.status(400).json({ error: 'Please enter a released date' });
    } else if (!rating) {
        return res.status(400).json({ error: 'Please enter a rating' });
    }
    next();
};

const postGame = async ( name, description, platforms, background_image, released, rating ) => {
    const newGame = await Videogame.findOrCreate({
        where: {
            name,
            description,
            platforms,
            background_image,
            released,
            rating
        }        
    });
    return newGame
};



module.exports={
    apiInfoClean,
    apiVideogames,
    dbInfo,
    gamesSaved,
    getDbGameByName,
    getGameByName,
    getDbGameById,
    getGameById,
    validatePostData,
    postGame
}
import axios from 'axios';
import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GAME_DETAIL, CLEAR_DETAIL, GET_ALL_GENRES, ERROR, FILTER_BY_GENRE, FILTER_BY_CREATION, ORDER_BY_NAME, ORDER_BY_RATING, POST_NEW_GAME } from './types';

export const getAllGames = () => {
    return async (dispatch) => {
        try {
            await axios.get(`http://localhost:3001/videogames`)
                .then((res) => {
                    return dispatch({
                        type: GET_ALL_GAMES,
                        payload: res.data
                    })
                })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        };
    };
};

export const getGameByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const game = response.data;
            return dispatch({
                type: GET_GAME_BY_NAME,
                payload: game
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        };
    };
};

export const getGameDetail = (idVideogame) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${idVideogame}`);
            const game = response.data;
            return dispatch({
                type: GET_GAME_DETAIL,
                payload: game
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        };
    };
};

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL
    };
};

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/genres`);
            const genres = response.data;
            return dispatch({
                type: GET_ALL_GENRES,
                payload: genres
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        };
    };
};

export const filterByCreation = (creation) => {
    return {
        type: FILTER_BY_CREATION,
        payload: creation
    };
};

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    };
};

export const orderByName = (orderName) => {
    return {
        type: ORDER_BY_NAME,
        payload: orderName
    };
};

export const orderByRating = (orderRating) => {
    return {
        type: ORDER_BY_RATING,
        payload: orderRating
    };
};


export const postNewGame = (game) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3001/videogames`, game);
            return dispatch({
                type: POST_NEW_GAME,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    };
};
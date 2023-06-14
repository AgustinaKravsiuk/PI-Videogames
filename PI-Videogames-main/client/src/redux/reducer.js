import { CLEAR_DETAIL, ERROR, FILTER_BY_CREATION, FILTER_BY_GENRE, GET_ALL_GAMES, GET_ALL_GENRES, GET_GAME_BY_NAME, GET_GAME_DETAIL, ORDER_BY_NAME, ORDER_BY_RATING, POST_NEW_GAME } from "./types";

const initialState = {
    games: [],
    allGames: [],
    gameDetail: [],
    genres: [],
    error: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload
            }
        case GET_GAME_BY_NAME:
            return {
                ...state,
                games: action.payload
            }
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                gameDetail: []
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_BY_GENRE:
            const allGames1 = state.allGames;
            const filterGenres = allGames1.filter((game) => game?.genres?.includes(action.payload));
            return {
                ...state,
                games: filterGenres
            }
        case FILTER_BY_CREATION:
            const allGames2 = state.allGames;
            const filterCreation = action.payload === 'created' ? allGames2.filter((game) => game.createdInDb) : allGames2;
            return {
                ...state,
                games: filterCreation
            }
        case ORDER_BY_NAME:
            if (action.payload === 'ASC') {
                let orderNameAsc = state.games.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0
                })
                return {
                    ...state,
                    games: orderNameAsc
                }
            } else {
                let orderNameDes = state.games.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0
                })
                return {
                    ...state,
                    games: orderNameDes
                }
            }
        case ORDER_BY_RATING:
            if (action.payload === 'ASC') {
                let orderRatingAsc = state.games.sort((a, b) => {
                    if (a.rating > b.rating) return 1;
                    if (b.rating > a.rating) return -1;
                    return 0
                })
                return {
                    ...state,
                    games: orderRatingAsc
                }
            } else {
                let orderRatingDes = state.games.sort((a, b) => {
                    if (a.rating > b.rating) return -1;
                    if (b.rating > a.rating) return 1;
                    return 0
                })
                return {
                    ...state,
                    games: orderRatingDes
                }
            }
        case POST_NEW_GAME:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        default:
            return {
                ...state
            }
    }
};

export default rootReducer;
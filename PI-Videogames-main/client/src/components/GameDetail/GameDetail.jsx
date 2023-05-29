import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getGameDetail } from '../../redux/actionCreators';
import NavBar from "../NavBar/NavBar";

const GameDetail = () => {
    const params = useParams();
    const game = useSelector((state) => state.gameDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameDetail(params.idVideogame));
        return () => {
            dispatch(clearDetail());
        };
    }, [dispatch, params.idVideogame]);

    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <img src={game.background_image} alt="imageGameDetail" />
                    <h1>{game.name}</h1>
                </div>
                <div>
                    <h3>{game.description}</h3>
                </div>
                <h2>Disponible en: {game.platform.join(', ')}</h2>
                <h2>Géneros: {game.genres.join(', ')}</h2>
                <h2>Rating: {game.rating}</h2>
                <h2>Fecha de lanzamiento: {game.released}</h2>
                <h3>Juego número: {game.id}</h3>
            </div>
        </div>
    );
};

export default GameDetail;
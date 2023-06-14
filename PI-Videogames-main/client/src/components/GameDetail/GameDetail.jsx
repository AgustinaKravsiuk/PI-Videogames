import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getGameDetail } from '../../redux/actionCreators';
import NavBar from "../NavBar/NavBar";
import styles from '../GameDetail/GameDetail.module.css'

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


    if (game.length === 0) {
        return <div className={styles.detailContainer}><h1 className={styles.cargando}>Loading...</h1></div>
    } else {
        return (
            <div className={styles.detailContainer}>
                <NavBar />
                <div className={styles.divGameDetail}>
                    <div className={styles.imgInfo}>
                        <div className={styles.imageContainer}>
                            <img src={game.background_image} alt='imageGameDetail' className={styles.imageDetail} />
                        </div>
                        <div className={styles.lettersDetail}>
                            <h1 className={styles.nameDetail}>{game.name}</h1>
                            <h2 className={styles.infoDetail}>Available in: {game.platforms.join(', ')}</h2>
                            <h2 className={styles.infoDetail}>Genres: {game?.genres?.join(', ')}</h2>
                            <h2 className={styles.infoDetail}>Rating: {game.rating}</h2>
                            <h2 className={styles.infoDetail}>Release data: {game.released}</h2>
                            <h3>Game number: {game.id}</h3>
                        </div>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: game.description }} className={styles.divDescription} />
                    </div>
                </div>
            </div>
        );
    };
};

export default GameDetail;
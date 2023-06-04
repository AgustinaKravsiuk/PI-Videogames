import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterByCreation, filterByGenre, getAllGames, getAllGenres, orderByName, orderByRating } from "../../redux/actionCreators";
import NavBar from '../NavBar/NavBar';
import Filters from "../Filters/Filters";
import Card from '../Card/Card';
import Paginated from '../Paginated/Paginated';
import styles from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games);
    const genres = useSelector((state) => state.genres);

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(15);
    const [inputPag, setInputPag] = useState(1);
    const [order, setOrder] = useState('');
    const currentGames = allGames.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina);

    const max = Math.ceil(allGames.length / porPagina);

    useEffect(() => {
        if (!allGames.length) {
            dispatch(getAllGames());
        }
        dispatch(getAllGenres());
    }, [dispatch, allGames]);

    const handleChangeByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setPagina(1);
        setInputPag(1);
        setOrder(`Ordenar por ${event.target.value}`);
    };

    const handleChangeByRating = (event) => {
        event.preventDefault();
        dispatch(orderByRating(event.target.value));
        setPagina(1);
        setInputPag(1);
        setOrder(`Ordenar por ${event.target.value}`);
    };

    const handleChangeCreation = (event) => {
        event.preventDefault();
        dispatch(filterByCreation(event.target.value));
        setPagina(1);
        setInputPag(1);
    };

    const handleChangeGenres = (event) => {
        event.preventDefault();
        dispatch(filterByGenre(event.target.value));
        setPagina(1);
        setInputPag(1);
    };

    return (
        <div className={styles.homeContainer}>
            <>
                <NavBar setPagina={setPagina} setInputPag={setInputPag} handleChangeByName={handleChangeByName} handleChangeByRating={handleChangeByRating} handleChangeCreation={handleChangeCreation} handleChangeGenres={handleChangeGenres} genres={genres} />
                <div className={styles.filtersContainer}>
                    <Filters setPagina={setPagina} setInputPag={setInputPag} handleChangeByName={handleChangeByName} handleChangeByRating={handleChangeByRating} handleChangeCreation={handleChangeCreation} handleChangeGenres={handleChangeGenres} genres={genres} />
                </div>
                <div className={styles.cardsContainer}>
                    {
                        currentGames.length ?
                            currentGames.map((game) => {

                                return (
                                    <div className={styles.divCard}>
                                        <Card
                                            id={game.id}
                                            key={game.id}
                                            background_image={game.background_image}
                                            name={game.name}
                                            genres={game?.genres?.join(', ') || ''}
                                            rating={game.rating}
                                        />
                                    </div>
                                );
                            }) : <div className={styles.cargando}> Loading... </div>
                    }
                </div>
                <Paginated max={max} pagina={pagina} setPagina={setPagina} inputPag={inputPag} setInputPag={setInputPag} />
            </>
        </div>
    );
};

export default Home;
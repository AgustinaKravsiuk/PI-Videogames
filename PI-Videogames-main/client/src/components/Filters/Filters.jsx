import React from 'react';
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actionCreators";
import styles from '../Filters/Filters.module.css';
import img from '../../assets/img/icons-actualizar-clara.png';

const Filters = ({ handleChangeByName, handleChangeByRating, handleChangeCreation, handleChangeGenres }) => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
    };
    

    const arrOptions = [
        { value: 'DEFAULT', name: 'Select' },
        { value: 'Action', name: 'Action' },
        { value: 'Adventure', name: 'Adventure' },
        { value: 'Arcade', name: 'Arcade' },
        { value: 'Board Games', name: 'Board Games' },
        { value: 'Card', name: 'Card' },
        { value: 'Casual', name: 'Casual' },
        { value: 'Educational', name: 'Educational' },
        { value: 'Family', name: 'Family' },
        { value: 'Fighting', name: 'Fighting' },
        { value: 'Indie', name: 'Indie' },
        { value: 'Massively Multiplayer', name: 'Massively Multiplayer' },
        { value: 'Platformer', name: 'Platformer' },
        { value: 'Puzzle', name: 'Puzzle' },
        { value: 'Racing', name: 'Racing' },
        { value: 'RPG', name: 'RPG' },
        { value: 'Shooter', name: 'Shooter' },
        { value: 'Simulation', name: 'Simulation' },
        { value: 'Sports', name: 'Sports' },        
        { value: 'Strategy', name: 'Strategy' },
    ]

    return (
        <div className={styles.filtersContainer}>

            <div className={styles.divFilter}>
                <label htmlFor='allGames'>
                    <div>Games</div>
                    <select name='filterByCreation' id='allGames' onChange={(event) => handleChangeCreation(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden>Select</option>
                        <option value="existing">Available</option>
                        <option value="created">Created</option>
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='allGenres'>
                    <div>Genres</div>
                    <select name='filterByGenre' id='allGenres' onChange={(event) => handleChangeGenres(event)} className={styles.selectFilter}>
                        {arrOptions.map(elem =>
                            <option value={elem.value} key={elem.name}>{elem.name}</option>)
                        }
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='orderByName'>
                    <div>Alphabetical order</div>
                    <select name='orderByName' id='orderByName' onChange={(event) => handleChangeByName(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden>Select</option>
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='orderByRating'>
                    <div>Rating order</div>
                    <select name='orderByRating' id='orderByRating' onChange={(event) => handleChangeByRating(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden >Select</option>
                        <option value="ASC">min. rating</option>
                        <option value="DESC">max. rating</option>
                    </select>
                </label>
            </div>
            <button onClick={(event) => handleClick(event)} className={styles.button}><img src={img} alt="imageaActualizar"/></button>
        </div>
    );
};

export default Filters;
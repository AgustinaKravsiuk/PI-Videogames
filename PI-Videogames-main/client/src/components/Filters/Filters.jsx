import React from 'react';
import styles from '../Filters/Filters.module.css'

const Filters = ({ handleChangeByName, handleChangeByRating, handleChangeCreation, handleChangeGenres, genres }) => {
    const arrOptions = [
        { value: 'DEFAULT', name: 'Seleccionar' },
        { value: 'Action', name: 'Acción' },
        { value: 'Arcade', name: 'Arcade' },
        { value: 'Adventure', name: 'Aventura' },
        { value: 'Racing', name: 'Carreras' },
        { value: 'Card', name: 'Cartas' },
        { value: 'Casual', name: 'Casual' },
        { value: 'Sports', name: 'Deportes' },
        { value: 'Shooter', name: 'Disparos' },
        { value: 'Educational', name: 'Educativo' },
        { value: 'Strategy', name: 'Estrategia' },
        { value: 'Family', name: 'Familiar' },
        { value: 'Indie', name: 'Independiente' },
        { value: 'Board Games', name: 'Juegos de Mesa' },
        { value: 'Fighting', name: 'Lucha' },
        { value: 'Massively Multiplayer', name: 'Multijugador Masivo' },
        { value: 'Platformer', name: 'Plataformas' },
        { value: 'Puzzle', name: 'Puzzle' },
        { value: 'RPG', name: 'RPG' },
        { value: 'Simulation', name: 'Simulación' },
    ]

    return (
        <div className={styles.filtersContainer}>

            <div className={styles.divFilter}>
                <label htmlFor='allGames'>
                    <div>Juegos</div>
                    <select name='filterByCreation' id='allGames' onChange={(event) => handleChangeCreation(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden>Seleccionar</option>
                        <option value="existing">Disponible</option>
                        <option value="created">Creado</option>
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='allGenres'>
                    <div>Géneros</div>
                    <select name='filterByGenre' id='allGenres' onChange={(event) => handleChangeGenres(event)} className={styles.selectFilter}>
                        {arrOptions.map(elem =>
                            <option value={elem.value} key={elem.name}>{elem.name}</option>)
                        }
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='orderByName'>
                    <div>Orden alfabético</div>
                    <select name='orderByName' id='orderByName' onChange={(event) => handleChangeByName(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden>Seleccionar</option>
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                    </select>
                </label>
            </div>

            <div className={styles.divFilter}>
                <label htmlFor='orderByRating'>
                    <div>Orden por rating</div>
                    <select name='orderByRating' id='orderByRating' onChange={(event) => handleChangeByRating(event)} defaultValue='default' className={styles.selectFilter}>
                        <option value="default" disabled hidden >Seleccionar</option>
                        <option value="ASC">min. rating</option>
                        <option value="DESC">max. rating</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default Filters;
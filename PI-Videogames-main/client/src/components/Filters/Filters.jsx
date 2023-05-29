import React from 'react';

const Filters = ({ handleChangeByName, handleChangeByRating, handleChangeCreation, handleChangeGenres, genres }) => {
    const arrOptions = [
        { value: 'DEFAULT', name: 'Géneros' },
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
        <div>
            <div>
                <label htmlFor='allGames'>Juegos
                    <select name='filterByCreation' id='allGames' onChange={(event) => handleChangeCreation(event)} >
                        <option value="DEFAULT" disabled selected hidden>Juegos</option>
                        <option value="existing">Disponible</option>
                        <option value="created">Creado</option>
                    </select>
                </label>
            </div>

            <div>
                <label htmlFor='allGenres'>Géneros
                    <select name='filterByGenre' id='allGenres' onChange={(event) => handleChangeGenres(event)}>
                        {arrOptions.map(elem =>
                            <option value={elem.value}>{elem.name}</option>)}
                    </select>
                </label>
            </div>

            <div>
                <label htmlFor='orderByName'>Ordenar por nombre
                    <select name='orderByName' id='orderByName' onChange={(event) => handleChangeByName(event)}>
                        <option value="" disabled hidden selected>Alfabético</option>
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                    </select>
                </label>
            </div>

            <div>
                <label htmlFor='orderByRating'>Ordenar por rating
                    <select name='orderByRating' id='orderByRating' onChange={(event) => handleChangeByRating(event)}>
                        <option value="" disabled hidden selected>Rating</option>
                        <option value="ASC">min. rating</option>
                        <option value="DESC">max. rating</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default Filters;
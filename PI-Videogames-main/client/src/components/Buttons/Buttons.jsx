import React from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actionCreators";
import { Link } from 'react-router-dom';

const Buttons = () => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
    };

    return (
        <div>
            <button onClick={(event) => handleClick(event)}>Recargar juegos</button>
            <button><Link to='/home'>Home</Link></button>
            <button><Link to='/form'>Crear un juego</Link></button>
        </div>
    );
};

export default Buttons;
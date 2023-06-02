import React from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actionCreators";
import { Link } from 'react-router-dom';
import styles from '../Buttons/Buttons.module.css'
import img from '../../assets/img/icons-casa-clara.png'

const Buttons = () => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
    };

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.button}>
                <Link to='/home' className={styles.textButton}>
                    <img src={img} alt="imageCasa" />
                </Link>
            </button>
            <button onClick={(event) => handleClick(event)} className={styles.button}>Recargar juegos</button>

            <button className={styles.button}><Link to='/form' className={styles.textButton}>Crear un juego</Link></button>
        </div>
    );
};

export default Buttons;
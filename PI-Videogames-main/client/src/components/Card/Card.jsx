import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.css'

const Card = ({ id, background_image, name, genres, rating }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageCard}>
                <Link to={`/videogames/${id}`} className={styles.linkCard}>
                    <img src={background_image} alt='imageGame'/>
                </Link>
            </div>
        <div className={styles.infoCard}>
            <h1 className={styles.nameCard}>{name}</h1>
            <h3>{genres}</h3>
            <h3>Rating: {rating}</h3>
        </div>
        </div>
    );
};

export default Card;
import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Buttons/Buttons.module.css'



const Buttons = () => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.button}><Link to='/form' className={styles.textButton}>Create game</Link></button>
        </div>
    );
};

export default Buttons;
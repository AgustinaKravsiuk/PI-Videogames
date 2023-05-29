import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <button className={styles.buttonLanding} type="button">
                <Link to='/home' className={styles.textButton}>INGRESAR</Link>
            </button>
        </div>
    );
};

export default Landing;
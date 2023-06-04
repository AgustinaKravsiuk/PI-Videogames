import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
import img from '../../assets/img/logoLanding.png'

const arrows = '>>>'

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.divContainer}>
                <div>Welcome to</div>
                <img src={img} alt='imageLogo' className={styles.logo} />
                <div className={styles.divButton}>
                    <button className={styles.buttonLanding} type="button">
                        <Link to='/home' className={styles.textButton}>START {arrows}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Buttons from '../Buttons/Buttons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import img from '../../assets/img/LogoDetware.png'

const NavBar = ({ setPagina, setInputPag }) => {
    const { pathname } = useLocation();

    return (
        <div className={styles.navBarContainer}>
            <Link to='/home' className={styles.textButton}>
                <img src={img} alt='imageLogo' className={styles.logo} />
            </Link>
            <Buttons />
            {
                pathname === '/home' &&
                <div>
                    <SearchBar setPagina={setPagina} setInputPag={setInputPag} />
                </div>
            }
        </div>
    );
};

export default NavBar;
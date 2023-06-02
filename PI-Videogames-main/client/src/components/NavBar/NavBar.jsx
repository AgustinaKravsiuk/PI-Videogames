import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Buttons from '../Buttons/Buttons';
import { useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ setPagina, setInputPag }) => {
    const { pathname } = useLocation();

    return (
        <div className={styles.navBarContainer}>
            <Buttons />
            {
                pathname === '/home' &&
                <div>
                    <SearchBar setPagina={setPagina} setInputPag={setInputPag}/>
                </div>
            }
        </div>
    );
};

export default NavBar;
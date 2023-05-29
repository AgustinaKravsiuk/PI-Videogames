import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import Buttons from '../Buttons/Buttons';
import { useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ setPagina, setInputPag, handleChangeByName, handleChangeByRating, handleChangeCreation, handleChangeGenres, genres }) => {
    const { pathname } = useLocation();

    return (
        <div className={styles.navBarContainer}>
            <Buttons />
            {
                pathname === '/home' &&
                <div className={styles.filtersContainer}>
                    <Filters setPagina={setPagina} setInputPag={setInputPag} handleChangeByName={handleChangeByName} handleChangeByRating={handleChangeByRating} handleChangeCreation={handleChangeCreation} handleChangeGenres={handleChangeGenres} genres={genres}/>
                    <SearchBar setPagina={setPagina} setInputPag={setInputPag} className={styles.searchBarContainer} />
                </div>
            }
        </div>
    );
};

export default NavBar;
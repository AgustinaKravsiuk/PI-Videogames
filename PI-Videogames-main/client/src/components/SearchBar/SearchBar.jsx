import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actionCreators";
import styles from '../SearchBar/SearchBar.module.css'
import img from '../../assets/img/icons-lupa-clara.png'
const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handlerSubmit = async (event) => {
        event.preventDefault();
        if (!input.length) {
            alert("Por favor ingrese un nombre");
        } else {
            const searchResult = await getGameByName(input)
            dispatch(searchResult);
            setInput('');
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    return (
        <div className={styles.searchBarContainer}>
            <input type="search" placeholder='  Buscar un juego...' id='searchGame' value={input} onChange={(event) => handleChange(event)} className={styles.searchBarInput} />
            <button type="submit" onClick={(event) => handlerSubmit(event)}className={styles.searchBarButton}>
                <img src={img} alt="imageLupa"/>
            </button>
        </div>
    );
};

export default SearchBar;
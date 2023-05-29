import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actionCreators";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ input, setInput ] = useState('');

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
        <div>
            <div>
                <input type="search" placeholder='Busca un juego...' id='searchGame' value={input} onChange={(event) => handleChange(event)} />
                <button type="submit" onClick={(event) => handlerSubmit(event)}>Buscar</button>
            </div>
        </div>
    );
};

export default SearchBar;
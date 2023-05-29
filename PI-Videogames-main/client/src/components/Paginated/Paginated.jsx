import React from "react";
import style from '../Paginated/Paginated.module.css'

const Paginated = ({ max, pag, setPag, inputPag, setInputPag }) => {
    const handleNextPage = () => {
        setInputPag(inputPag + 1);
        setPag(pag + 1);
    };

    const handlePreviousPage = () => {
        setInputPag(inputPag - 1);
        setPag(pag - 1);
    };

    const onChange = (event) => {
        setInputPag(event.target.value);
    };

    return (
        <div className={style.paginatedContainer}>
            <button onClick={handlePreviousPage} disabled={pag === 1 || pag < 1}>Anterior</button>
            <input type="text" value={inputPag} onChange={(event) => onChange(event)} />
            <p>de {max}</p>
            <button onClick={handleNextPage} disabled={pag === Math.ceil(max)  || pag > Math.ceil(max)}>Siguiente</button>
        </div>
    );
};

export default Paginated;
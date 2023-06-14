import React from "react";
import styles from '../Paginated/Paginated.module.css'

const Paginated = ({ max, pagina, setPagina, inputPag, setInputPag }) => {
  const handleNextPage = () => {
    setInputPag(inputPag + 1);
    setPagina(pagina + 1);
  };

  const handlePreviousPage = () => {
    setInputPag(inputPag - 1);
    setPagina(pagina - 1);
  };

  const onChange = (event) => {
    setInputPag(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPagina(parseInt(event.target.value));
      if (
        parseInt(event.target.value) < 1 ||
        parseInt(event.target.value) > Math.ceil(max) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPagina(1);
        setInputPag(1);
      } else {
        setPagina(parseInt(event.target.value));
      }
    }
  }

  const previous = '<';
  const next = '>';


  return (
    <div className={styles.paginatedContainer}>
      <button onClick={handlePreviousPage} disabled={pagina === 1 || pagina < 1} className={styles.paginatedButton}>{previous}</button>
      <input type="text" value={inputPag} onChange={(event) => onChange(event)} onKeyDown={(event) => onKeyDown(event)} className={styles.inputPaginated} />
      <p>of {max}</p>
      <button onClick={handleNextPage} disabled={pagina === Math.ceil(max) || pagina > Math.ceil(max)} className={styles.paginatedButton}>{next}</button>
    </div>
  );
};

export default Paginated;
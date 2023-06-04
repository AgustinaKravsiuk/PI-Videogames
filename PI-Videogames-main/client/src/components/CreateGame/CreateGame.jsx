import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, postNewGame } from '../../redux/actionCreators';
import { useNavigate } from "react-router-dom";
import styles from '../CreateGame/CreateGame.module.css'

const CreateGame = () => {
    const [form, setForm] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: [],
        released: '',
        rating: 0,
        genres: []
    });

    const [errors, setErrors] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: '',
        released: '',
        rating: '',
        genres: ''
    });

    let platforms = ['PS4', 'PS5', 'PC', 'SEGA', 'NINTENDO 64', 'NINTENDO SWITCH', 'ATARI', 'XBOX ONE', 'XBOX X', 'GAME BOY ADVANCED'];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.genres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getAllGenres());
        }
    }, [dispatch, genres]);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
        if (!errors.length) {
            return setErrors({ [property]: '' });
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (form.name.trim() === '' || form.name > 10) {
            return setErrors({ ...errors, name: 'Ingrese un nombre' });
        } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/g.test(form.background_image)) {
            return setErrors({ ...errors, background_image: 'Ingrese una URL válida' });
        } else if (form.description.trim() === '') {
            return setErrors({ ...errors, description: 'Ingrese una descripción' });
        } else if (form.platforms.length === 0 || form.platforms.length > 5) {
            return setErrors({ ...errors, platforms: 'Ingrese entre 1 y 5 plataformas' });
        } else if (form.released === '') {
            return setErrors({ ...errors, released: 'Ingrese una fecha de lanzamiento' });
        } else if (form.rating === 0 || form.rating > 5) {
            return setErrors({ ...errors, rating: 'Ingrese un rating entre 1 y 5' });
        } else if (form.genres.length === 0 || form.genres.length > 4) {
            return setErrors({ ...errors, genres: 'Ingrese entre 1 y 5 géneros' });
        } else {
            dispatch(postNewGame(form));
            navigate('/home');
        };
    };

    const handleReset = (event) => {
        event.preventDefault();
        setForm({
            name: '',
            background_image: '',
            description: '',
            platforms: [],
            released: '',
            rating: 0,
            genres: []
        });
        document.getElementById('platforms').reset();
    };

    const handleClickGenres = (event) => {
        if (event.target.checked) {
            setForm({ ...form, genres: [...form.genres, event.target.value] });
        } else {
            setForm({ ...form, genres: form.genres.filter((gen) => gen.name !== event.target.value) });
        }
    };

    const handleClickPlatforms = (event) => {
        if (event.target.checked) {
            setForm({ ...form, platforms: [...form.platforms, event.target.value] });
        } else {
            setForm({ ...form, platforms: form.platforms.filter((platform) => platform !== event.target.value) });
        };
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)} className={styles.createGameContainer}>
            <fieldset className={styles.fieldsetContainer}>
                <legend className={styles.legend}>Create your Game</legend>
                <div className={styles.divContainer}>
                    <label htmlFor="name" className={styles.labelForm}>Name:</label>
                    <input type="text" id="name" value={form.name} name="name" onChange={(event) => handleChange(event)} className={styles.inputForm} />
                    <p>{errors.name}</p>
                </div>
                <div className={styles.divContainer}>
                    <label htmlFor="image" className={styles.labelForm}>Image:</label>
                    <input type="text" id="image" value={form.background_image} name="background_image" onChange={(event) => handleChange(event)} className={styles.inputForm} />
                    <p>{errors.background_image}</p>
                </div>
                <div className={styles.divContainer}>
                    <label htmlFor="description" className={styles.labelForm}>Description:</label>
                    <textarea id="description" cols='30' rows='10' value={form.description} name='description' onChange={(event) => handleChange(event)} className={styles.textareaForm} />
                    <p>{errors.description}</p>
                </div>
                <div className={styles.divContainerOptions}>
                    <label htmlFor="platforms" className={styles.labelForm}>Platforms:</label>
                    <div className={styles.divContainerOptionsChecks}>
                        {
                            platforms?.sort().map((platform) => {
                                return (
                                    <div id="platforms" >
                                        <input className={styles.inputFormCheck} type="checkbox" value={platform} name='platfomrs' onClick={(event) => handleClickPlatforms(event)} />
                                        <label htmlFor="platform" className={styles.checksForm}>{platform}</label>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <p>{errors.platforms}</p>
                </div>
                <div className={styles.divContainer}>
                    <label htmlFor="released" className={styles.labelForm}>Release Date:</label>
                    <input type="date" id="released" value={form.released} name='released' onChange={(event) => handleChange(event)} className={styles.inputForm} />
                    <p>{errors.released}</p>
                </div>
                <div className={styles.divContainer}>
                    <label htmlFor="rating" className={styles.labelForm}>Rating:</label>
                    <input type="number" id="rating" value={form.rating} name="rating" onChange={(event) => handleChange(event)} min="0" className={styles.inputFormRating} />
                    <p>{errors.rating}</p>
                </div>
                <div className={styles.divContainerOptions}>
                    <label htmlFor="genres" className={styles.labelForm}>Genders:</label>
                    <div className={styles.divContainerOptionsChecks}>
                        {
                            genres.sort((a, b) => (a.name > b.name ? 1 : -1)).length ? genres.map((genre) => {
                                return (
                                    <div>
                                        <input className={styles.inputFormCheck} type="checkbox" id={genre.name} value={genre.name} onClick={(event) => handleClickGenres(event)} />
                                        <label htmlFor={genre.name} key={genre.id} className={styles.checksForm}>{genre.name}</label>
                                    </div>
                                );
                            }) : <div></div>
                        }
                    </div>
                    <p>{errors.genres}</p>
                </div>
                <input type="submit" value="Crear juego" className={styles.buttonForm} />
                <input type="reset" value="Restablecer formulario" className={styles.buttonForm} />
            </fieldset>
        </form>
    );
};

export default CreateGame;
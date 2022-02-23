// Core
import { useDispatch } from 'react-redux';

// Actions
import { filmsActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';
import { api } from '../../tools/utils/api';

// Types
import { Films, Film } from './types';

export const useFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films);

    const fetchFilms = async () => {
        try {
            const response = await api.films.fetch();

            if (response.status !== 200) {
                throw new Error(`fetchFilms failed with status ${response.status}`);
            }

            const data = await response.json();
            const result: Films = data.results;

            dispatch(filmsActions.setFilms(result));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFilm = async (filmId: string) => {
        try {
            const response = await api.film.fetch(filmId);

            if (response.status !== 200) {
                throw new Error(`fetchFilm failed with status ${response.status}`);
            }

            const result: Film = await response.json();

            dispatch(filmsActions.setFilm(result));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        films,
        fetchFilms,
        fetchFilm,
    };
};

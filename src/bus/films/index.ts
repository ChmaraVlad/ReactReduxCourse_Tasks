// Core
import { useDispatch } from 'react-redux';

// Actions
import { filmsActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';
import { api } from '../../tools/utils/api';

// Types
import { Films, Film } from './types';

const idSearcher = (url: string) => url.match(/[0-9]/);

export const useFilms = (filmId: string | null = null) => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films);
    const currentFilm = films.data?.find(({ id }) => id === filmId);

    const fetchFilms = async () => {
        try {
            dispatch(filmsActions.setFilmsFetchingStatus(true));

            const response = await api.films.fetch();

            if (response.status !== 200) {
                throw new Error(`fetchFilms failed with status ${response.status}`);
            }

            const data = await response.json();
            const result: Film[] = data.results;
            const parsedResult: Films = result.map((film) => {
                const regExpMatchArray = idSearcher(film.url);

                return {
                    ...film,
                    id: regExpMatchArray ? regExpMatchArray[ 0 ] : 'noId',
                };
            });

            dispatch(filmsActions.setFilms(parsedResult));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(filmsActions.setFilmsFetchingStatus(false));
        }
    };

    const fetchFilm = async (filmId: string) => {
        if (films.data?.map(({ id }) => id).includes(filmId)) {
            return;
        }
        try {
            const response = await api.film.fetch(filmId);

            if (response.status !== 200) {
                throw new Error(`fetchFilm failed with status ${response.status}`);
            }

            const result: Film = await response.json();
            const regExpMatchArray = idSearcher(result.url);

            dispatch(filmsActions.setFilm({
                ...result,
                id: regExpMatchArray ? regExpMatchArray[ 0 ] : 'noId',
            }));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        films,
        fetchFilms,
        fetchFilm,
        currentFilm,
    };
};

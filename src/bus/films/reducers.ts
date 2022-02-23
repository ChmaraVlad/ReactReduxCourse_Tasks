// Types
import * as types from './types';

export const setFilms: types.BaseContact<types.Films> = (__, action) => {
    return action.payload;
};

export const setFilm: types.BaseContact<types.Film> = (state, action) => {
    if (state !== null) {
        return [ ...state, action.payload ];
    }

    return [ action.payload ];
};

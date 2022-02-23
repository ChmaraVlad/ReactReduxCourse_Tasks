// Types
import * as types from './types';

export const setFilms: types.BaseContact<types.Films> = (state, action) => {
    state.data = action.payload;
};

export const setFilm: types.BaseContact<types.ExtendedFilm> = (state, action) => {
    state.data = [ action.payload ];
};

export const setFilmsFetchingStatus: types.BaseContact<boolean> = (state, action) => {
    state.isFetching = action.payload;
};

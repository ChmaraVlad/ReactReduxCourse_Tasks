// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    data:       null,
    isFetching: false,
};

export const filmsSlice = createSlice<types.FilmsState, typeof reducers>({
    name: 'films',
    initialState,
    reducers,
});

export const sliceName = filmsSlice.name;
export const filmsActions = filmsSlice.actions;
export default filmsSlice.reducer;

// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = {
    data:       null,
    isFetching: false,
};

export const peopleSlice = createSlice<types.PeopleState, typeof reducers>({
    name: 'people',
    initialState,
    reducers,
});

export const sliceName = peopleSlice.name;
export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;

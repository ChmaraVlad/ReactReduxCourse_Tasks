// Types
import * as types from './types';

export const setPeople: types.BaseContact<types.People> = (state, action) => {
    state.data = action.payload;
};
export const setPerson: types.BaseContact<types.ExtendedPerson> = (state, action) => {
    state.data = [ action.payload ];
};

export const setPeopleFetchingStatus: types.BaseContact<boolean> = (state, action) => {
    state.isFetching = action.payload;
};

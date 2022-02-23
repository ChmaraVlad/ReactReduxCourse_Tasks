// Types
import * as types from './types';

export const setPeople: types.BaseContact<types.People> = (__, action) => {
    return action.payload;
};
export const setPerson: types.BaseContact<types.Person> = (state, action) => {
    // if (state !== null) {
    //     return [ ...state, action.payload ];
    // }

    return [ action.payload ];
};

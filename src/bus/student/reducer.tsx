import { StudentState/* , StudentActionTypes */ } from './types';
import * as Types  from './types';
import { Reducer, AnyAction } from 'redux';

export const initialState: StudentState = {
    results: [],
};

export const studentReducer: Reducer<StudentState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_STUDENT:
            return {
                ...state,
                results: [ ...state.results, action.payload ],
            };

        default:
            return state;
    }
};

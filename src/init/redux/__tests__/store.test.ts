/**
 * @jest-environment jsdom
 */

// // // Core
import { createStore, combineReducers } from 'redux';

// // // Reducers
import films  from '../../../bus/films/slice';
import togglers  from '../../../bus/client/togglers';
import  people  from '../../../bus/people/slice';
import  { studentReducer as student }  from '../../../bus/student/reducer';

// // // Store
import { store } from '../index';


export const referenceRootReducer = combineReducers({
    togglers,
    student,
    films,
    people,
});

const referenceStore = createStore(referenceRootReducer);

describe('redux store', ()=>{
    test('should have a valid state shape', ()=>{
        expect(store.getState()).toStrictEqual(referenceStore.getState());
    });
});

/* eslint-disable jest/no-large-snapshots */
// Reducer
import { studentReducer, initialState } from '../reducer';

// Actions
import { studentActions } from '../actions';

// Types
import { Student } from '../types';

const testStudent: Student = {
    firstName:  'string',
    lastName:   'string',
    email:      'string',
    age:        'string',
    speciality: 'string',
    sex:        'string',
};


describe('student reducer', () => {
    test('should return initial state by default', () => {
        expect(studentReducer(void 0, {
            type: void 0,
        })).toEqual(initialState);
        // почему не работает так?
        // expect(reducer(void 0, {})).toEqual(initialState);
    });

    test('should create student', () => {
        expect(studentReducer(void 0, studentActions.createStudentAction(testStudent)))
            .toEqual({
                results: [
                    {
                        firstName:  'string',
                        lastName:   'string',
                        email:      'string',
                        age:        'string',
                        speciality: 'string',
                        sex:        'string',
                    },
                ],
            });
    });
});

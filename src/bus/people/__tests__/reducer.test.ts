/* eslint-disable jest/no-large-snapshots */
// Reducer
import reducer from '../slice';

// Actions
import { peopleActions, initialState } from '../slice';

// Types
import { ExtendedPerson } from '../types';

const testPerson: ExtendedPerson = {
    name:       'string',
    height:     'string',
    mass:       'string',
    hair_color: 'string',
    skin_color: 'string',
    eye_color:  'string',
    birth_year: 'string',
    gender:     'string',
    homeworld:  'string',
    films:      [],
    species:    [],
    vehicles:   [],
    starships:  [],
    created:    'string',
    edited:     'string',
    url:        'string',
    id:         'string',
};


describe('people reducer', () => {
    test('should return initial state by default', () => {
        expect(reducer(void 0, {
            type: void 0,
        })).toEqual(initialState);
        // почему не работает так?
        // expect(reducer(void 0, {})).toEqual(initialState);
    });

    test('should handle fetching status to start', () => {
        expect(reducer(void 0, peopleActions.setPeopleFetchingStatus(true)))
            .toEqual({
                data:       null,
                isFetching: true,
            });
    });

    test('should handle fetching status to stop', () => {
        const prevState = {
            data:       null,
            isFetching: true,
        };
        expect(reducer(prevState, peopleActions.setPeopleFetchingStatus(false)))
            .toEqual({
                data:       null,
                isFetching: false,
            });
    });

    test('should handle fill action people', () => {
        expect(reducer(void 0, peopleActions.setPeople([ testPerson ]))).toEqual(
            {
                data: [
                    {
                        name:       'string',
                        height:     'string',
                        mass:       'string',
                        hair_color: 'string',
                        skin_color: 'string',
                        eye_color:  'string',
                        birth_year: 'string',
                        gender:     'string',
                        homeworld:  'string',
                        films:      [],
                        species:    [],
                        vehicles:   [],
                        starships:  [],
                        created:    'string',
                        edited:     'string',
                        url:        'string',
                        id:         'string',
                    },
                ],
                isFetching: false,
            },
        );
    });

    test('should handle fill action person', () => {
        expect(reducer(void 0, peopleActions.setPerson(testPerson))).toEqual(
            {
                data: [
                    {
                        name:       'string',
                        height:     'string',
                        mass:       'string',
                        hair_color: 'string',
                        skin_color: 'string',
                        eye_color:  'string',
                        birth_year: 'string',
                        gender:     'string',
                        homeworld:  'string',
                        films:      [],
                        species:    [],
                        vehicles:   [],
                        starships:  [],
                        created:    'string',
                        edited:     'string',
                        url:        'string',
                        id:         'string',
                    },
                ],
                isFetching: false,
            },
        );
    });
});

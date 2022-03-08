// Actions
import { peopleActions } from '../slice';

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

describe('people actions', ()=>{
    test('should change people Fetching Status to true', ()=>{
        expect(peopleActions.setPeopleFetchingStatus(true)).toMatchSnapshot();
    });
    test('should change people Fetching Status to false', ()=>{
        expect(peopleActions.setPeopleFetchingStatus(false)).toMatchSnapshot();
    });
    test('should fetch people', ()=>{
        expect(peopleActions.setPeople([ testPerson ])).toMatchSnapshot();
    });
    test('should fetch person', ()=>{
        expect(peopleActions.setPerson(testPerson)).toMatchSnapshot();
    });

    // test('should set fetching error', ()=>{
    //     expect(filmsActions.setFetchingError('We have an error !')).toMatchSnapshot();
    // });
});

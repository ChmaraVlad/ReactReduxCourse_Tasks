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

describe('student actions', ()=>{
    test('should create student', ()=>{
        expect(studentActions.createStudentAction(testStudent)).toMatchSnapshot();
    });

    // test('should set fetching error', ()=>{
    //     expect(filmsActions.setFetchingError('We have an error !')).toMatchSnapshot();
    // });
});

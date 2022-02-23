// Core
import { useDispatch } from 'react-redux';

// Actions
import { studentActions } from './actions';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
import * as Types from './types';

export const useStudent = () => {
    const dispatch = useDispatch();
    const { results } = useSelector((state) => state.student);

    const applyStudent = (_profile: Types.Student) => {
        dispatch(studentActions.createStudentAction(_profile));
    };

    return {
        results,
        applyStudent,
    };
};

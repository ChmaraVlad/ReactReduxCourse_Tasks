// Types
import * as Types  from './types';

export const studentActions = {
    createStudentAction: (data: Types.Student) => {
        return {
            type:    Types.CREATE_STUDENT,
            payload: data,
        };
    },
};

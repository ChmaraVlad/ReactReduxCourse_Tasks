export type Student = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    speciality: '',
    sex: '',
}

export type StudentState = {
    results: Student[];
}

export const CREATE_STUDENT = '[STUDENT] - CREATE_STUDENT';
export type createStudentAction = {
    type: typeof CREATE_STUDENT;
    payload: Student
};

export type StudentActionTypes = createStudentAction;

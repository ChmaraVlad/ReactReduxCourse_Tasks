export type Student = {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    speciality: string,
    sex: string,
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

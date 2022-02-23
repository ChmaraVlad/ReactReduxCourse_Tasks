// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../init';


// Types
export type Student = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    speciality: '',
    sex: '',
}

export const ProfileComponent = () => {
    const { results } = useSelector((state: RootState) => state.student);

    const jsxStudents = results.map((student: Student, index: number) => {
        return (
            <article key = { index }>
                <h2>Profile №{index + 1}</h2>
                <ul>
                    <li>
                        First Name: {student.firstName}
                    </li>
                    <li>
                        Last Name: {student.lastName}
                    </li>
                    <li>
                        Age: {student.age}
                    </li>
                    <li>
                        Email: {student.email}
                    </li>
                    <li>
                        Sex: {student.sex}
                    </li>
                    <li>
                        Speciality: {student.speciality}
                    </li>
                </ul>
            </article>
        );
    });

    return (
        <>
            <h1>
                Profiles
            </h1>
            {
                results.length
                    ? jsxStudents
                    : <h2> Our dataBase are Empty </h2>
            }
        </>
    );
};

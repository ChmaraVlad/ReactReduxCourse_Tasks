// Core
import React from 'react';
import { useSelector } from '../../../tools/hooks';
import { Navigation } from '../Navigation';


// Styles
import * as S from './styles';


// Types
export type Student = {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    speciality: string,
    sex: string,
}

export const ProfileComponent = () => {
    const { results } = useSelector((state) => state.student);

    const jsxStudents = results.map((student: Student, index: number) => {
        return (
            <article key = { index }>
                <li>Profile №{index + 1}</li>
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
        <S.Container>
            <Navigation />
            <S.Wrapper>
                {
                    results.length
                        ? jsxStudents
                        : <h1> Our dataBase are Empty </h1>
                }
            </S.Wrapper>
        </S.Container>
    );
};

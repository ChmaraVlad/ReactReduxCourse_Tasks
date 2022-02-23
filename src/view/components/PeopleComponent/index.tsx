// Core
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePeople } from '../../../bus/people';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const PeopleComponent: FC<PropTypes> = () => {
    const { people, fetchPeople } = usePeople();

    useEffect(() => {
        fetchPeople();
    }, []);

    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    const peopleJsx = people?.map((person, index) => {
        const {
            name,
            birth_year,
            gender,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,

        } = person;

        return (
            <ul key = { index }>
                <div
                    onClick = { () => handleRedirect<string>(`${index + 1}`) }>
                    Name: {name}
                </div>
                <li>
                    Birthday: {birth_year}
                </li>
                <li>
                    Gender: {gender}
                </li>
                <li>
                    Height: {height}
                </li>
                <li>
                    Mass: {mass}
                </li>
                <li>
                    Hair Color: {hair_color}
                </li>
                <li>
                    Skin Color: {skin_color}
                </li>
                <li>
                    Eye Color: {eye_color}
                </li>
            </ul>
        );
    });

    return (
        <S.Container>
            <h1>
                People List
            </h1>
            <S.Wrapper>
                {peopleJsx}
            </S.Wrapper>
        </S.Container>
    );
};

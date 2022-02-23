// Core
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePeople } from '../../../bus/people';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const PersonComponent: FC<PropTypes> = () => {
    const { id } = useParams();
    const { people, fetchPerson } = usePeople();

    useEffect(() => {
        fetchPerson(`${id}`);
    }, []);


    const personJsx = people?.map((person, index) => {
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
            <ul
                className = 'wrapper'
                key = { index }>
                <div className = 'image'>
                    <img
                        alt = 'avatar'
                        src = 'https://via.placeholder.com/200'
                    />
                </div>
                <div className = 'content'>
                    <div
                        className = 'link'>
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
                </div>
            </ul>
        );
    });

    return (
        <S.Container>
            Component: PersonComponent
            <S.Wrapper>
                {personJsx}
            </S.Wrapper>
        </S.Container>
    );
};

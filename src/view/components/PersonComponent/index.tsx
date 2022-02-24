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
    const { fetchPerson, currentPerson } = usePeople();

    useEffect(() => {
        id && fetchPerson(id);
    }, []);

    if (currentPerson === void 0) {
        return <div>Find Error</div>;
    }

    return (
        <S.Container>
            <S.Wrapper>
                <ul
                    className = 'wrapper'>
                    <div className = 'image'>
                        <img
                            alt = 'avatar'
                            src = 'https://via.placeholder.com/200'
                        />
                    </div>
                    <div className = 'content'>
                        <div
                            className = 'link'>
                            Name: {currentPerson.name}
                        </div>
                        <li>
                            Birthday: {currentPerson.birth_year}
                        </li>
                        <li>
                            Gender: {currentPerson.gender}
                        </li>
                        <li>
                            Height: {currentPerson.height}
                        </li>
                        <li>
                            Mass: {currentPerson.mass}
                        </li>
                        <li>
                            Hair Color: {currentPerson.hair_color}
                        </li>
                        <li>
                            Skin Color: {currentPerson.skin_color}
                        </li>
                        <li>
                            Eye Color: {currentPerson.eye_color}
                        </li>
                    </div>
                </ul>
            </S.Wrapper>
        </S.Container>
    );
};

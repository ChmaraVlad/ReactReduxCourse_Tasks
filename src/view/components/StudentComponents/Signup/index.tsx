import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../../Navigation';
import { StudentRegistrationComponent } from './StudentRegistrationComponent';

// Components

// Styles
import * as S from './styles';


export const Signup = ()=>{
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <S.Container>
            <Navigation />
            <h1>Registration Form</h1>
            <StudentRegistrationComponent />
            <nav>
                <h2>You can check your Profile on this Profiles Page</h2>
                <button onClick = { () => handleRedirect<string>('/student') }>
                    Profiles
                </button>
            </nav>
        </S.Container>
    );
};

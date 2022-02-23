// Core
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFilms } from '../../../bus/films';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { FilmComponent } from '../../components/FilmComponent';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Film: FC<PropTypes> = () => {
    return (
        <S.Container>
            <FilmComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Film />
    </ErrorBoundary>
);

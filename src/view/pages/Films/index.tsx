// Core
import React, { FC, useEffect } from 'react';
import { useFilms } from '../../../bus/films';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { FilmsComponent } from '../../components/FilmsComponent';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Films: FC<PropTypes> = () => {
    return (
        <S.Container>
            <FilmsComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Films />
    </ErrorBoundary>
);

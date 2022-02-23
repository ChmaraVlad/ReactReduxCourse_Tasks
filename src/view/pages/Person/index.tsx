// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';
import { PersonComponent } from '../../components/PersonComponent';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Person: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Navigation />
            <PersonComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Person />
    </ErrorBoundary>
);

// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';
import { PeopleComponent } from '../../components/PeopleComponent';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const People: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Navigation />
            <PeopleComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <People />
    </ErrorBoundary>
);

// Core
import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Bus // REMOVE THIS
import { useFilms } from '../../../bus/films';

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';

// Styles
import { Container } from './styles';


const Main: FC = () => {
    return (
        <Container>
            <Navigation />
            <h1>Welcom to home Page</h1>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

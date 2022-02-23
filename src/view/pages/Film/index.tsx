// Core
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Bus
import { useFilms } from '../../../bus/films';

// Components
import {
    ErrorBoundary,
    Navigation,
} from '../../components';

// Styles
import * as S from './styles';

const Film = () => {
    const { id } = useParams();
    const { currentFilm, fetchFilm } = useFilms(id);

    useEffect(() => {
        id && fetchFilm(id);
    }, []);

    if (currentFilm === void 0) {
        return <div>Find Error</div>;
    }

    return (
        <S.Container>
            <Navigation />
            <S.Wrapper>
                <ul className = 'wrapper'>
                    <div className = 'image'>
                        <img
                            alt = 'avatar'
                            src = 'https://via.placeholder.com/300'
                        />
                    </div>
                    <div className = 'content'>
                        <div className = 'link'>Title: {currentFilm.title}</div>
                        <li>Release Date: {currentFilm.release_date}</li>
                        <li>Opening Crawl: {currentFilm.opening_crawl}</li>
                        <li>Director: {currentFilm.director}</li>
                        <li>Producer: {currentFilm.producer}</li>
                    </div>
                </ul>
            </S.Wrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Film />
    </ErrorBoundary>
);

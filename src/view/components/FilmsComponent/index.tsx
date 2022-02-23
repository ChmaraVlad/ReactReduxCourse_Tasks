// Core
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilms } from '../../../bus/films';
import { Navigation } from '../Navigation';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const FilmsComponent: FC<PropTypes> = () => {
    const { films, fetchFilms } = useFilms();

    useEffect(() => {
        fetchFilms();
    }, []);

    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    const filmsJsx = films?.map((film, index) => {
        const {
            title,
            release_date,
            opening_crawl,
            director,
            producer,

        } = film;

        return (
            <ul
                className = 'wrapper'
                key = { index }>
                <div className = 'image'>
                    <img
                        alt = 'avatar'
                        src = 'https://via.placeholder.com/300'
                    />
                </div>
                <div className = 'content'>
                    <div
                        className = 'link'
                        onClick = { () => handleRedirect<string>(`${index + 1}`) }>
                        Title: {title}
                    </div>
                    <li>
                        Release Date: {release_date}
                    </li>
                    <li>
                        Opening Crawl: {opening_crawl}
                    </li>
                    <li>
                        Director: {director}
                    </li>
                    <li>
                        Producer: {producer}
                    </li>
                </div>
            </ul>
        );
    });

    return (
        <S.Container>
            <Navigation />
            <h1>
                Films List
            </h1>
            <S.Wrapper>
                {filmsJsx}
            </S.Wrapper>
        </S.Container>
    );
};

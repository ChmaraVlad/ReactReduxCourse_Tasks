// Core
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

export const FilmComponent: FC<PropTypes> = () => {
    const { id } = useParams();
    const { films, fetchFilm } = useFilms();

    useEffect(() => {
        fetchFilm(`${id}`);
    }, []);

    const filmJsx = films?.map((film, index) => {
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
                        className = 'link'>
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
            <S.Wrapper>
                {filmJsx}
            </S.Wrapper>
        </S.Container>
    );
};

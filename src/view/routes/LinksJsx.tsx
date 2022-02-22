import React from 'react';
import { useNavigate } from 'react-router-dom';
import { book } from './book';

const Links = [ book.root, book.news, book.user, book.student, book.registration, book.theme, book.people, book.person, book.film, book.films ];

export const LinksJsx = Links.map((link, index) => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <li key = { index }>
            <button onClick = { () => handleRedirect<string>(link) }>
                {link}
            </button>
        </li>
    );
});

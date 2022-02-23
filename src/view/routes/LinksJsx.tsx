import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { book } from './book';

const Links = [ book.root, book.news, book.user, book.student, book.registration, book.theme, book.people, book.person, book.film, book.films ];

const NavElement: FC<{link: string}> = ({ link }) => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <line>
            <button onClick = { () => handleRedirect<string>(link) }>
                {link}
            </button>
        </line>
    );
};

export const LinksJsx = Links.map((link, index) => (
    <NavElement
        key = { index }
        link = { link }
    />
));

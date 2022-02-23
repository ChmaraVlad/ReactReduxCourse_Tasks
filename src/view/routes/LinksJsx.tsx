import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { book } from './book';

const Links = [ book.student, book.registration, book.people, book.films ];

const NavElement: FC<{link: string}> = ({ link }) => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <li>
            <button onClick = { () => handleRedirect<string>(link) }>
                {link}
            </button>
        </li>
    );
};

export const LinksJsx = Links.map((link, index) => (
    <NavElement
        key = { index }
        link = { link }
    />
));

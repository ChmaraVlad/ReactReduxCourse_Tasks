// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson6: FC<PropTypes> = () => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <S.Container>
            <h1>
                Task 7
            </h1>
            <S.Articles>
                <h2>Домашнее задание No1</h2>
                <button onClick = { () => handleRedirect<string>('/films') }>
                    Films List
                </button>
                <p>
                    В этом задании нужно создать новый домен people внутри директории bus . Внутри этого
                    домена будет 2 компонента People и Person .
                </p>
                <p>
                    Компонент People будет находится в файле bus/people/index.js а компонент Person в
                    файле bus/people/components/person.js
                </p>
                <p>
                    Компонент People будет выводить имена всех персонажей, а компонент Person будет
                    выводить более детальную информацию про одного персонажа.
                </p>
                <p>
                    В качестве API ресурса используйте даный сервис: https://swapi.co/documentation#people
                </p>
                <S.List>
                    Обратите внимание
                    <li>Для решения данной задачи используйте структуру проекта которая разбиралась на
                        уроке
                    </li>
                    <li>Для компонента People используйте роут: /people</li>
                    <li>Для компонента Person используйте роут: /people/id</li>
                    <li>Поле email по типу должно быть email</li>
                    <li>При клике на имя персонажа необходимо перейти на страницу конкретного
                        персонажа
                    </li>
                </S.List>
            </S.Articles>
            <S.Articles>
                <h2>Домашнее задание No2</h2>
                <button onClick = { () => handleRedirect<string>('/people') }>
                    People List
                </button>
                <p>
                    В этом задании нужно создать новый домен films внутри директории bus . Внутри этого
                    домена будет 2 компонента Films и Film .
                </p>
                <p>
                    Компонент Films будет находится в файле bus/films/index.js а компонент Film в
                    файле bus/films/components/film.js
                </p>
                <p>
                    Компонент Films будет выводить список названий всех фильмах, а компонент Film будет
                    выводить более детальную информацию про один фильм.
                </p>
                <p>
                    В качестве API ресурса используйте даный сервис: https://swapi.co/documentation#films
                </p>
                <S.List>
                    Обратите внимание
                    <li>Для решения данной задачи используйте структуру проекта которая разбиралась на
                        уроке
                    </li>
                    <li>Для компонента Films используйте роут: /films
                    </li>
                    <li>Для компонента Film используйте роут: /films/id</li>
                    <li>При клике на название фильма необходимо перейти на страницу конкретного
                        персонажа
                    </li>
                </S.List>
            </S.Articles>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson6 />
    </ErrorBoundary>
);

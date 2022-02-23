// Core
import React, { FC } from 'react';

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

const Lesson8: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Article>
                <div className = 'title'>
                    Домашнее задание No1
                </div>
                <div className = 'content'>
                    <p className = 'item'>
                        В этом задании нужно покрыть тестами все Redux actions
                    </p>
                    <ul className = 'list'>
                        <div className = 'list-title'>
                            Обратите внимание
                        </div>
                        <li className = 'list-item'>
                            Для написания тестов использовать методику сравнения action со снепшотом
                        </li>
                    </ul>
                </div>
            </S.Article>
            <S.Article>
                <div className = 'title'>
                    Домашнее задание No2
                </div>
                <div className = 'content'>
                    <p className = 'item'>
                        В этом задании нужно покрыть тестами все Redux reducers
                    </p>
                    <ul className = 'list'>
                        <div className = 'list-title'>
                            Обратите внимание
                        </div>
                        <li className = 'list-item'>
                            Для написания тестов использовать методику сравнения reducer со снепшотом
                        </li>
                    </ul>
                </div>
            </S.Article>
            <S.Article>
                <div className = 'title'>
                    Домашнее задание No3
                </div>
                <div className = 'content'>
                    <p className = 'item'>
                        В этом задании нужно покрыть тестами Redux store
                    </p>
                </div>
            </S.Article>
            <S.Article>
                <div className = 'title'>
                    Домашнее задание No4
                </div>
                <div className = 'content'>
                    <p className = 'item'>
                        В этом задании необходимо покрыть тестами компонет StudentRegistration из
                        предыдущих уроков.
                    </p>
                    <ul className = 'list'>
                        <div className = 'list-title'>
                            Обратите внимание
                        </div>
                        <li className = 'list-item'>
                            Покрывать тестами Redux составляющую в этом задании не нужно
                        </li>
                        <li className = 'list-item'>
                            Покрывать кастомные хуки в этом задании не обязательно
                        </li>
                    </ul>
                </div>
            </S.Article>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson8 />
    </ErrorBoundary>
);

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

const Lesson6: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Task 6
            </h1>
            <S.Articles>
                <h2>Домашнее задание No1 <br />
                    Можна перейти после регистрации через форму в уроке 5
                </h2>

                <p>
                    В этом задании нужно подключить к React приложению Redux . <br />
                    После этого необходимо создать директорию bus внутри директории src <br />
                    Затем внутри директории bus необходимо создать директорию student <br />
                    После этого необходимо перенести форму регистрации студента созданную в рамках
                    работы над предыдущим домашним заданием. <br />
                    Форма регистрации студента теперь должна быть здесь:
                    bus/student/components/registrationForm.js <br />
                    Стили для этой формы если они присутствуют должны быть здесь: bus/student/ <br />
                    Затем необходимо добавить сохранение данных с формы регистрации в Redux . <br />
                    После этого необходимо создать компонент Profile , который должен находится внутри
                    файла bus/student/index.js <br />
                    Компонент Profile должен рендерить данные зарегистрированного пользователя. <br />
                    Рендерить компонент Profile необходимо по адресу /student <br />
                    Рендерить компонент RegistrationForm необходимо по адресу /registration <br />
                </p>
            </S.Articles>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson6 />
    </ErrorBoundary>
);

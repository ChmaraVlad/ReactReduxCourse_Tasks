// Core
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import { Accordion } from '../components/Accordion';
import { Signup } from '../pages/Signup';
import { ProfileComponent } from '../components/ProfileComponent';

// Pages
import { Main } from '../pages';
import ListLessonsReact from '../pages/ListLessonsReact';
import News from '../pages/News';
import StudentRegistration from '../pages/Lesson 5';
import { ReactLesson3 } from '../pages/ReactPractice/ReactLesson3';
import { ReactLesson4 } from '../pages/ReactPractice/ReactLesson4';
import NoMatch from '../pages/NoMatch';
import { book } from './book';
import Film from '../pages/Film';
import Films from '../pages/Films';
import People from '../pages/People';
import Person from '../pages/Person';
import Lesson6 from '../pages/Lesson6';
import Lesson7 from '../pages/Lesson7';
import Lesson8 from '../pages/Lesson8';

export const Public: FC = () => {
    return (
        <section>
            <Routes>
                <Route
                    element = { <Main /> }
                    path = '/'
                />
                <Route
                    element = { <ListLessonsReact /> }
                    path = 'react'>
                    <Route
                        element = { <News /> }
                        path = '1'
                    />
                    <Route
                        element = { <Accordion /> }
                        path = '2'
                    />
                    <Route
                        element = { <ReactLesson3 /> }
                        path = '3'
                    />
                    <Route
                        element = { <ReactLesson4 /> }
                        path = '4'
                    />
                    <Route
                        element = { <StudentRegistration /> }
                        path = '5'
                    />
                    <Route
                        element = { <Lesson6 /> }
                        path = '6'
                    />
                    <Route
                        element = { <Lesson7 /> }
                        path = '7'
                    />
                    <Route
                        element = { <Lesson8 /> }
                        path = '8'
                    />
                </Route>
                <Route
                    element = { <Signup /> }
                    path = { book.registration }
                />
                <Route
                    element = { <ProfileComponent /> }
                    path = { book.student }
                />
                <Route
                    element = { <People /> }
                    path = 'people'
                />
                <Route
                    element = { <Person /> }
                    path = 'people/:id'
                />
                <Route
                    element = { <Films /> }
                    path = 'films'
                />
                <Route
                    element = { <Film /> }
                    path = 'films/:id'
                />
                <Route
                    element = { <NoMatch /> }
                    path = '*'
                />
            </Routes>
        </section>
    );
};

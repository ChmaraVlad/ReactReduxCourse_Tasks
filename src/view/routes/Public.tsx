// Core
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import { Accordion } from '../components/Accordion';

// Pages
import { Main } from '../pages';
import LessonReact from '../pages/LessonReact';
import News from '../pages/LessonReact/News';
import StudentRegistration from '../pages/LessonReact/StudentRegistration';
import { ReactLesson3 } from '../ReactPractice/ReactLesson3';
import { ReactLesson4 } from '../ReactPractice/ReactLesson4';
import NoMatch from '../pages/NoMatch';

export const Public: FC = () => {
    return (
        <section>
            <Routes>
                <Route
                    element = { <Main /> }
                    path = '/'
                />
                <Route
                    element = { <LessonReact /> }
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
                        element = { <ReactLesson3 /> }
                        path = '6'
                    />
                    <Route
                        element = { <ReactLesson3 /> }
                        path = '7'
                    />
                    <Route
                        element = { <ReactLesson3 /> }
                        path = '8'
                    />
                </Route>
                <Route
                    element = { <NoMatch /> }
                    path = '*'
                />
            </Routes>
        </section>
    );
};

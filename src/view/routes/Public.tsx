// Core
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Pages
import { Main, Register, Items, Item } from '../pages';

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

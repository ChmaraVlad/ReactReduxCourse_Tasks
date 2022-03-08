// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { studentReducer as student } from '../../bus/student/reducer';
import films from '../../bus/films/slice';
import people from '../../bus/people/slice';
// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        student,
        films,
        people,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);

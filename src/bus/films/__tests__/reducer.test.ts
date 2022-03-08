/* eslint-disable jest/no-large-snapshots */
// Reducer
import reducer from '../slice';

// Actions
import { filmsActions, initialState } from '../slice';

const TestFilm = {
    id:            '1',
    title:         'string',
    episode_id:    '5',
    opening_crawl: 'string',
    director:      'string',
    producer:      'string',
    release_date:  'string',
    characters:    [],
    planets:       [],
    starships:     [],
    vehicles:      [],
    species:       [],
    created:       'string',
    edited:        'string',
    url:           'string',
};
// const arrayTestFilm = [ TestFilm ];


describe('films reducer', () => {
    test('should return initial state by default', () => {
        expect(reducer(void 0, {
            type: void 0,
        })).toEqual(initialState);
        // почему не работает так?
        // expect(reducer(void 0, {})).toEqual(initialState);
    });

    test('should handle fetching status start', () => {
        expect(reducer(void 0, filmsActions.setFilmsFetchingStatus(true)))
            .toEqual({
                data:       null,
                isFetching: true,
            });
    });

    test('should handle stop fetching action', () => {
        const prevState = {
            data:       null,
            isFetching: true,
        };
        expect(reducer(prevState, filmsActions.setFilmsFetchingStatus(false)))
            .toEqual({
                data:       null,
                isFetching: false,
            });
    });
    //  ========== 1 variant setFilms - dont work
    // test('should handle fill action films', () => {
    //     expect(reducer(void 0, filmsActions.setFilms([ TestFilm ]))).toMatchInlineSnapshot(`
    //     Object {
    //         "data": Array [
    //             Object {
    //             "characters": Array [],
    //             "created": "string",
    //             "director": "string",
    //             "edited": "string",
    //             "episode_id": "5",
    //             "id": "1",
    //             "opening_crawl": "string",
    //             "planets": Array [],
    //             "producer": "string",
    //             "release_date": "string",
    //             "species": Array [],
    //             "starships": Array [],
    //             "title": "string",
    //             "url": "string",
    //             "vehicles": Array [],
    //             },
    //         ],
    //         "isFetching": false,
    //     }
    //   `);
    // });
    // ========= 2 variant setFilms - working
    test('should handle fill action films', () => {
        expect(reducer(void 0, filmsActions.setFilms([ TestFilm ]))).toEqual(
            {
                data: [
                    {
                        characters:    [],
                        created:       'string',
                        director:      'string',
                        edited:        'string',
                        episode_id:    '5',
                        id:            '1',
                        opening_crawl: 'string',
                        planets:       [],
                        producer:      'string',
                        release_date:  'string',
                        species:       [],
                        starships:     [],
                        title:         'string',
                        url:           'string',
                        vehicles:      [],
                    },
                ],
                isFetching: false,
            },
        );
    });
    //  ========== 1 variant setFilm - dont work
    // test('should handle fill action films', () => {
    //     expect(reducer(void 0, filmsActions.setFilms([ TestFilm ]))).toMatchInlineSnapshot(`
    //     Object {
    //         "data": Array [
    //             Object {
    //             "characters": Array [],
    //             "created": "string",
    //             "director": "string",
    //             "edited": "string",
    //             "episode_id": "5",
    //             "id": "1",
    //             "opening_crawl": "string",
    //             "planets": Array [],
    //             "producer": "string",
    //             "release_date": "string",
    //             "species": Array [],
    //             "starships": Array [],
    //             "title": "string",
    //             "url": "string",
    //             "vehicles": Array [],
    //             },
    //         ],
    //         "isFetching": false,
    //     }
    //   `);
    // });
    // =========== 2 variant setFilm - working
    test('should handle fill action film', () => {
        expect(reducer(void 0, filmsActions.setFilm(TestFilm))).toEqual(
            {
                data: [
                    {
                        characters:    [],
                        created:       'string',
                        director:      'string',
                        edited:        'string',
                        episode_id:    '5',
                        id:            '1',
                        opening_crawl: 'string',
                        planets:       [],
                        producer:      'string',
                        release_date:  'string',
                        species:       [],
                        starships:     [],
                        title:         'string',
                        url:           'string',
                        vehicles:      [],
                    },
                ],
                isFetching: false,
            },
        );
    });
});

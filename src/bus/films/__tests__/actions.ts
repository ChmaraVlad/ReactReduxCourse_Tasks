// Actions
import { filmsActions } from '../slice';

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

describe('planets actions', ()=>{
    test('should change Films Fetching Status to true', ()=>{
        expect(filmsActions.setFilmsFetchingStatus(true)).toMatchSnapshot();
    });
    test('should change Films Fetching Status to false', ()=>{
        expect(filmsActions.setFilmsFetchingStatus(false)).toMatchSnapshot();
    });
    test('should fetch films', ()=>{
        expect(filmsActions.setFilms([ TestFilm ])).toMatchSnapshot();
    });
    test('should fetch film', ()=>{
        expect(filmsActions.setFilm(TestFilm)).toMatchSnapshot();
    });

    // test('should set fetching error', ()=>{
    //     expect(filmsActions.setFetchingError('We have an error !')).toMatchSnapshot();
    // });
});

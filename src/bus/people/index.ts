// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { api } from '../../tools/utils/api';

// Actions
// import * as sagaActions from './saga/sagaActions';
import { peopleActions } from './slice';

// Types
import { Person, People } from './types';

// достаем из url строки - id(ввиде массива)
const idSearcher = (url: string) => url.match(/[0-9]/);

export const usePeople = (personId: string | null = null) => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);
    // достаем из state.people сущность по id для страници Person
    const currentPerson = people.data?.find(({ id }) => id === personId);

    const fetchPeople = async () => {
        try {
            dispatch(peopleActions.setPeopleFetchingStatus(true));

            const response = await api.people.fetch();

            if (response.status !== 200) {
                throw new Error(`fetchPeople failed with status ${response.status}`);
            }

            const data = await response.json();
            const result: People = data.results;
            // добавляем до каждого обьекта пришедших данных из сервера
            //  id который достаем из строки url в обьекте
            const parsedResult: People = result.map((person) => {
                const regExpMatchArray = idSearcher(person.url);

                return {
                    ...person,
                    id: regExpMatchArray ? regExpMatchArray[ 0 ] : 'noId',
                };
            });

            dispatch(peopleActions.setPeople(parsedResult));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(peopleActions.setPeopleFetchingStatus(false));
        }
    };

    const fetchPerson = async (personId: string) => {
        // проверка - есть ли такая сущность с id в массиве уже в state
        if (people.data?.map(({ id }) => id).includes(personId)) {
            return;
        }

        try {
            const response = await api.person.fetch(personId);

            if (response.status !== 200) {
                throw new Error(`fetchPeople failed with status ${response.status}`);
            }

            const result: Person = await response.json();
            // достаем id из строки url
            const regExpMatchArray = idSearcher(result.url);

            dispatch(peopleActions.setPerson({
                ...result,
                id: regExpMatchArray ? regExpMatchArray[ 0 ] : 'noId',
            }));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        people,
        fetchPeople,
        fetchPerson,
        currentPerson,
    };
};

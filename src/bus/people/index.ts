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

export const usePeople = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);

    const fetchPeople = async () => {
        try {
            const response = await api.people.fetch();

            if (response.status !== 200) {
                throw new Error(`fetchPeople failed with status ${response.status}`);
            }

            const data = await response.json();
            const result: People = data.results;

            dispatch(peopleActions.setPeople(result));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPerson = async (id: string) => {
        try {
            const response = await api.person.fetch(id);

            if (response.status !== 200) {
                throw new Error(`fetchPeople failed with status ${response.status}`);
            }

            const data: Person = await response.json();

            dispatch(peopleActions.setPerson(data));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        people,
        fetchPeople,
        fetchPerson,
    };
};

// Config
import { root, freeApiPeople, uri } from './config';

export const api = Object.freeze({
    peopleFree: {
        fetch: () => {
            return fetch(`${freeApiPeople}?results=20`, {
                method: 'GET',
            });
        },
    },
    people: {
        fetch: () => {
            return fetch(`${root}/people`, {
                method: 'GET',
            });
        },
    },
    person: {
        fetch: (id: string) => {
            return fetch(`${root}/people/${id}`, {
                method: 'GET',
            });
        },
    },
    films: {
        // ----------- ANY
        fetch: () => {
            return fetch(`${root}/films`, {
                method: 'GET',
            });
        },
    },
    film: {
        fetch: (id: string) => {
            return fetch(`${root}/films/${id}`, {
                method: 'GET',
            });
        },
    },
    news: {
        fetch: () => {
            return fetch(`${uri}`);
        },
    },
});

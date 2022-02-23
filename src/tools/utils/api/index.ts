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
        // --------- any
        fetch: (id: any) => {
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
        // ----------- ANY
        fetch: (id: any) => {
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

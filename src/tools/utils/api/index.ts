// Config
import { root, freeApiPeople, uri } from './config';

export const api = Object.freeze({
    peopleFree: {
        fetch: ()=> {
            return fetch(`${freeApiPeople}?results=20`, {
                method: 'GET',
            });
        },
    },
    people: {
        fetch: ()=> {
            return fetch(`${root}/people`, {
                method: 'GET',
            });
        },
    },
    films: {
        // ----------- ANY
        fetch: (id: any)=> {
            if (Number(id) && !isNaN(id)) {
                console.log(true);

                return fetch(`${root}/films/${id}`, {
                    method: 'GET',
                });
            }

            return fetch(`${root}/films`, {
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

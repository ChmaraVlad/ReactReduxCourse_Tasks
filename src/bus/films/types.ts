// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Film = {
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: string[],
    planets: string[],
    starships:string[],
    vehicles: string[],
    species: string[],
    created: string,
    edited: string,
    url: string
}

export type ExtendedFilm = {
    id: string;
} & Film;

export type Films = Array<ExtendedFilm>;
export type FilmsState = {
    data: Films | null;
    isFetching: boolean;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<FilmsState, PayloadAction<T>>

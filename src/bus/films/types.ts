// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Film = {
    title: string,
    episode_id: number,
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
export type Films = Array<Film>
export type FilmsState = Films | null

// Contracts
export type BaseContact<T = any> = CaseReducer<FilmsState, PayloadAction<T>>

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDateRange } from '../lib/utils';

export const rawgApi = createApi({
  reducerPath: '@@rawgApi',
  baseQuery: fetchBaseQuery({
    method: 'GET',
    baseUrl: `https://${process.env.REACT_APP_RAPID_API_HOST}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
    },
  }),
  endpoints: (builder) => ({
    getLatestGames: builder.query({
      query: () => ({
        url: '/games',
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY,
          page_size: 9,
          dates: getDateRange(),
          ordering: '-rating',
        },
      }),
      transformResponse: (response) => ({
        typeOfModification: 'listOfGames',
        data: response.results,
      }),
    }),
    searchGamesForSuggestions: builder.query({
      query: (query) => ({
        url: '/games',
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY,
          search: query,
          page_size: 10,
        },
      }),
      transformResponse: (response) => ({
        typeOfModification: 'suggestionsList',
        data: response.results,
      }),
    }),
    searchGames: builder.query({
      query: (query) => ({
        url: '/games',
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY,
          search: query,
          page_size: 51,
        },
      }),
      transformResponse: (response) => ({
        typeOfModification: 'listOfGames',
        data: response.results,
      }),
    }),
    getGameForFavorites: builder.query({
      query: (id) => ({
        url: `/games/${id}`,
        params: {
          key: process.env.REACT_APP_RAWG_API_KEY,
        },
      }),
      transformResponse: (response) => ({
        typeOfModification: 'gameForFavorites',
        data: response,
      }),
    }),
  }),
});

export const {
  useSearchGamesForSuggestionsQuery,
  useGetGameForFavoritesQuery,
  useGetLatestGamesQuery,
  useSearchGamesQuery,
  endpoints,
} = rawgApi;

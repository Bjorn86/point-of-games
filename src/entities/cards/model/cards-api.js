import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDateRange } from '../lib/utils';

export const cardsApi = createApi({
  reducerPath: '@@cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_RAPID_API_HOST}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
    },
  }),
  endpoints: (builder) => ({
    getLatestGames: builder.query({
      query: () =>
        `/games?key=${
          process.env.REACT_APP_RAWG_API_KEY
        }&page_size=21&dates=${getDateRange()}`,
      transformResponse: (response) => response.results,
    }),
  }),
});

export const { useGetLatestGamesQuery } = cardsApi;

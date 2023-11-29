import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const featureFlagApi = createApi({
  reducerPath: '@@featureFlagApi',
  baseQuery: fetchBaseQuery({
    method: 'GET',
    baseUrl: process.env.REACT_APP_FEATURE_FLAG_API_URL,
  }),
  endpoints: (builder) => ({
    getFeatureFlag: builder.query({
      query: () => ({
        url: 'api/feature-flag',
      }),
    }),
  }),
});

export const { useGetFeatureFlagQuery } = featureFlagApi;

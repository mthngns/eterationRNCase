import {BASE_URI} from '../lib/end-points';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URI}),
  endpoints: () => ({}),
});

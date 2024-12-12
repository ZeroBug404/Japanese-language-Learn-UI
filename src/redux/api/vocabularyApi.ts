import { getFromLocalStorage } from '../../helpers/utils/saveData';
import { baseApi } from './baseApi';

const token = getFromLocalStorage('accessToken');
const headers = {
  Authorization: `${token}`,
};

export const vocabularyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createVocabulary: build.mutation({
      query: (vocabularyData) => ({
        url: `vocabulary/create`,
        method: 'POST',
        body: vocabularyData,
      }),
    }),
    getAllVocabulary: build.query({
      query: () => ({
        url: `vocabulary`,
        method: 'GET',
        headers: headers,
      }),
    }),
    getSingleVocabulary: build.query({
      query: ({ id }) => ({
        url: `vocabulary/${id}`,
        method: 'GET',
      }),
    }),
    updateVocabulary: build.mutation({
      query: ({ id, data }) => ({
        url: `vocabulary/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateVocabularyMutation,
  useGetAllVocabularyQuery,
  useGetSingleVocabularyQuery,
  useUpdateVocabularyMutation,
} = vocabularyApi;

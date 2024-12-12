import { getFromLocalStorage } from '../../helpers/utils/saveData';
import { baseApi } from './baseApi';

const token = getFromLocalStorage('accessToken');
const headers = {
  Authorization: `${token}`,
};

export const lessonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLesson: build.mutation({
      query: (lessonData) => ({
        url: `lessons/create`,
        method: 'POST',
        body: lessonData,
        headers: headers,
      }),
    }),
    getAllLesson: build.query({
      query: () => ({
        url: `lessons`,
        method: 'GET',
        headers: headers,
      }),
    }),
    getSingleLesson: build.query({
      query: ({ id }) => ({
        url: `lessons/${id}`,
        method: 'GET',
        headers: headers,
      }),
    }),
    updateLesson: build.mutation({
      query: ({ id, data }) => ({
        url: `lessons/${id}`,
        method: 'PATCH',
        body: data,
        headers: headers,
      }),
    }),
  }),
});

export const {
  useCreateLessonMutation,
  useGetAllLessonQuery,
  useGetSingleLessonQuery,
  useUpdateLessonMutation
} = lessonApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMenuItem } from "../interfaces/components/Dropdown/IMenuItem";
import { ITopicFromApi } from "../interfaces/api/ITopicFromApi";
import { ITopicsResponse } from "../interfaces/api/ITopicsResponse";
import { ISpecialistsResponse } from "../interfaces/api/ISpecialistsResponse";
import { ISpecialist } from "../interfaces/api/ISpecialist";
import { TOPIC_DEFAULT_VALUE } from "../constants";
import { prepareSearchParams } from "../utils/prepareSearchParams";
import { updateSpecialistsList, replaceSpecialistsList } from "./searchPageSlice";

export const searchPageApi = createApi({
  reducerPath: "searchPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://freuders-web-api-test-3.azurewebsites.net/api/" }),
  endpoints: (build) => ({
    getTopics: build.query<IMenuItem[], void>({
      query: () => "subjects",
      transformResponse: (response: ITopicsResponse): IMenuItem[] => {
        const parsedResponse = response?.data.map((topic: ITopicFromApi) => {
          return {
            value: `${topic.id}`,
            label: topic.name,
          };
        });

        return [TOPIC_DEFAULT_VALUE, ...parsedResponse];
      },
    }),

    getSpecialists: build.query<ISpecialist[], { searchParams: URLSearchParams, key: string }>({
      async queryFn(args, api, _extraOptions, fetchWithBQ) {
        const { searchParams } = args;
        const requestParams: URLSearchParams = prepareSearchParams(searchParams);

        const response = await fetchWithBQ({
          url: "search/specialists",
          method: "GET",
          params: requestParams,
        });

        const data = response?.data as ISpecialistsResponse;

        const parsedResponse: ISpecialist[] = data?.data.items.map((item) => {
          return {
            rating: item.rating,
            photoUrl: item.photoUrl,
            name: item.name,
            age: item.age,
            defaultSubjectName: item.defaultSubjectName,
            subjectsCount: item.subjectsCount,
            sex: item.sex,
            onlineStatus: item.onlineStatus,
            lastActivityTime: item.lastActivityTime,
          };
        });

        const page = parseInt(searchParams.get("page") as string);

        if (page === 1) {
          api.dispatch(replaceSpecialistsList(parsedResponse));
        } else if (page > 1) {
          api.dispatch(updateSpecialistsList(parsedResponse));
        }

        return { data: parsedResponse };
      },
    }),
  }),
});


export const {
  useGetTopicsQuery,
  useGetSpecialistsQuery,
} = searchPageApi;

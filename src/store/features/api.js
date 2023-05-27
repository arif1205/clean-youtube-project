import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	endpoints: (builder) => ({
		getPlayListById: builder.query({
			query: (id) => `users/${id}`,
		}),
		getPlayListByLink: builder.query({
			query: (link) => `${link}`,
		}),
	}),
});

export const { useGetPlayListByIdQuery, useGetPlayListByLinkQuery } = api;

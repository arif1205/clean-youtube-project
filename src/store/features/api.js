import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_YOUTUBE_API_BASE_URL,
	}),
	endpoints: (builder) => ({
		getPlayListById: builder.query({
			query: ({ playlistID }) =>
				`playlistItems?part=snippet&playlistId=${playlistID}&key=${
					import.meta.env.VITE_YOUTUBE_API_KEY
				}`,
		}),
	}),
});

export const { useGetPlayListByIdQuery } = api;

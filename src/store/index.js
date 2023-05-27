import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./features/playlists/playlistsSlice";
import { api } from "./features/api";
import logger from "redux-logger";

export default configureStore({
	reducer: {
		playlists: playlistReducer,
		[api.reducerPath]: api.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware, logger),
});

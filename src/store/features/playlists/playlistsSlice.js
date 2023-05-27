import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
	name: "playlists",
	initialState: [],
	reducers: {
		addPlaylist: (state, action) => {
			state.playlists.push(action.payload);
		},
		removePlaylist: (state, action) => {
			state.playlists = state.playlists.filter(
				(playlist) => playlist.id !== action.payload.id
			);
		},
	},
});

export const { addPlaylist, removePlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;

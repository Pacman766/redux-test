import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	return response.data;
});

type User = {
	id: string;
	name: string;
};

type UserState = {
	users: User[];
	isLoading: boolean;
	error: string;
};

export const userSlice = createSlice({
	name: 'users',
	initialState: { users: [], isLoading: false, error: '' } as UserState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.users = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.isLoading = false;
			state.users = [];
			state.error = 'Error fetching users!';
		});
	},
});

export default userSlice.reducer;

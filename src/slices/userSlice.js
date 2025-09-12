import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Создаем асинхронный Thunk
export const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const user = await response.json();
  return user;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
            state.loading = 'pending'
        })
    // builder
    //   .addCase(fetchUser.pending, (state) => {
    //     state.loading = 'pending'; // Это обновление будет сгруппировано
    //   })
    //   .addCase(fetchUser.fulfilled, (state, action) => {
    //     state.loading = 'idle'; // Это обновление будет сгруппировано
    //     state.user = action.payload; // ...и это тоже
    //   })
    //   .addCase(fetchUser.rejected, (state, action) => {
    //     state.loading = 'idle';
    //     state.error = action.error.message;
    //   });
  },
});

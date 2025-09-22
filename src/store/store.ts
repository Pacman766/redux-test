import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
	},
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

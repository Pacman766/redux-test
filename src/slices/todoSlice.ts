import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoType[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

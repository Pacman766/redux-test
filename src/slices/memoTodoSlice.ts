// import { createSlice, createEntityAdapter, createSelector, type EntityState } from '@reduxjs/toolkit';

// type Task = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// const todosAdapter = createEntityAdapter();
// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: todosAdapter.getInitialState(),
//   reducers: {
//     addTodo: todosAdapter.addOne,
//     updateTodo: todosAdapter.updateOne,
//   },
// });

// // Автоматические селекторы
// export const { selectById, selectIds, selectAll } = todosAdapter.getSelectors(
//   (state: any) => state.todos as EntityState<Task[]>
// );

// // Мемоизированный селектор (reselect)
// export const selectCompletedTodos = createSelector([selectAll], (todos: Task[]) => todos.filter((t) => t.completed));

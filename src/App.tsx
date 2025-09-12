import './App.css';
import { useAppDispatch, useAppSelector } from './store/store';
import { addTodo, toggleTodo } from './slices/todoSlice';
import { useState } from 'react';

function App() {
  return <TodoList />;
}
export default App;

function TodoList() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const [text, setText] = useState('');

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>

      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTodo(t.id))}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </>
  );
}

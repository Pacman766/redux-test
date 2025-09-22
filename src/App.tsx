import { useReducer, useState } from 'react';
import './App.css';

const App = () => {
	return <></>;
};

export default App;

type Todo = {
	id: number;
	name: string;
	completed: boolean;
};

type TodoAction =
	| { type: 'ADD_TODO'; payload: { name: string } }
	| { type: 'TOGGLE_TODO'; payload: { id: number } }
	| { type: 'DELETE_TODO'; payload: { id: number } };

const reducer = (todos: Todo[], action: TodoAction): { todos: Todo[] } => {
	switch (action.type) {
		case 'ADD_TODO':
			return { todos: [...todos, newTodo(action.payload.name)] };
		case 'TOGGLE_TODO':
			return todos.map((t) => {
				if (t.id === action.payload.id) {
					return { ...t, completed: !t.completed };
				}
				return todos;
			});
		case 'DELETE_TODO':
			return todos.filter((t) => t.id !== action.payload.id);
		default:
			return todos;
	}
};

const TodoList = () => {
	const [todos, dispatch] = useReducer(reducer, { todos: [] });
	const [name, setName] = useState('');

	return (
		<>
			<form>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</form>
			<ul>
				{todos.map((t) => (
					<div key={t.id}>
						<span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.name}</span>
						<button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: t.id } })}>Toggle</button>
						<button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: t.id } })}>Delete</button>
					</div>
				))}
			</ul>
		</>
	);
};

const newTodo = (name: string): Todo => {
	return { id: Date.now(), name, completed: false };
};

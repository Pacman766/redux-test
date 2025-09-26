import React, { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';

const App = () => {
	return (
		<>
			<TodoList />
		</>
	);
};

export default App;

export enum TodoActionType {
	ADD = 'ADD_TODO',
	TOGGLE = 'TOGGLE_TODO',
	DELETE = 'DELETE_TODO',
}

type Todo = {
	id: number;
	name: string;
	completed: boolean;
};
type TodoAction =
	| { type: TodoActionType.ADD; payload: { name: string } }
	| { type: TodoActionType.TOGGLE; payload: { id: number } }
	| { type: TodoActionType.DELETE; payload: { id: number } };

function reducer(todos: Todo[], action: TodoAction): Todo[] {
	switch (action.type) {
		case 'ADD_TODO':
			return [...todos, newTodo(action.payload.name)];
		case 'TOGGLE_TODO':
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		case 'DELETE_TODO':
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
}

const TodoList = () => {
	const init = (initial: Todo[]) => {
		try {
			const raw = localStorage.getItem('todos');
			return raw ? (JSON.parse(raw) as Todo[]) : initial;
		} catch {
			return initial;
		}
	};

	const [todos, dispatch] = useReducer(reducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const [name, setName] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) return;
		dispatch({ type: 'ADD_TODO', payload: { name } });
		setName('');
	};

	const handleToggle = useCallback((id: number) => {
		dispatch({ type: TodoActionType.TOGGLE, payload: { id } });
	}, []);

	const handleDelete = useCallback((id: number) => {
		dispatch({ type: TodoActionType.DELETE, payload: { id } });
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" disabled={!name.trim()}>
					Submit
				</button>
				{todos.length === 0 && <p>No todos yet</p>}
			</form>
			<ul>
				{todos.map((t) => (
					<TodoItem key={t.id} todo={t} onToggle={handleToggle} onDelete={handleDelete} />
				))}
			</ul>
		</>
	);
};

const newTodo = (name: string): Todo => ({
	id: Number(BigInt.asIntN(53, BigInt(`0x${crypto.randomUUID().replace(/-/g, '').slice(0, 13)}`))), // или хранить id как string
	name,
	completed: false,
});

const TodoItem = React.memo(function TodoItem({
	todo,
	onToggle,
	onDelete,
}: {
	todo: Todo;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}) {
	return (
		<li>
			<span className={todo.completed ? 'todo-completed' : undefined}>{todo.name}</span>
			<button type="button" onClick={() => onToggle(todo.id)}>
				Toggle
			</button>
			<button type="button" onClick={() => onDelete(todo.id)}>
				Delete
			</button>
		</li>
	);
});

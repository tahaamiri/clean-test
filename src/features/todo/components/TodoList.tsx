// src/features/todo/components/TodoList.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, removeTodo, toggleTodo } from '../todoSlice';
import { AppDispatch, RootState } from '../../../redux/store';

const TodoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector((state: RootState) => state.todos.list);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);


    console.log(todos)

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
                    </span>
                    <button onClick={() => dispatch(toggleTodo(todo))}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

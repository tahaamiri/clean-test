import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../todoSlice';
import { AppDispatch } from '../../../redux/store';

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleAddTodo = () => {
        if (title.trim()) {
            dispatch(addNewTodo(title));
            setTitle('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoForm;

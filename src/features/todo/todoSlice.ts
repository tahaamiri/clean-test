// src/features/todo/todoSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from './domain/models/Todo';
import { TodoApiRepository } from './data/TodoApiRepository';
import { addTodo, deleteTodo, toggleTodoCompletion, updateTodo } from './domain/useCases';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', TodoApiRepository.getAllTodos);

export const addNewTodo = createAsyncThunk('todos/addTodo', async (title: string) => {
    await addTodo(TodoApiRepository)(title);
    return await TodoApiRepository.getAllTodos();
});

export const removeTodo = createAsyncThunk('todos/deleteTodo', async (id: string) => {
    await deleteTodo(TodoApiRepository)(id);
    return TodoApiRepository.getAllTodos();
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo: Todo) => {
    await toggleTodoCompletion(TodoApiRepository)(todo);
    return TodoApiRepository.getAllTodos();
});

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, title }: { id: string; title: string }) => {
    await updateTodo(TodoApiRepository)(id, title);
    return TodoApiRepository.getAllTodos();
});

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [] as Todo[],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(editTodo.fulfilled, (state, action) => {
                state.list = action.payload;
            });
    },
});

export default todoSlice.reducer;

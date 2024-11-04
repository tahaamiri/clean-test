// src/features/todo/data/TodoApiRepository.ts

import { TodoRepository } from '../domain/repositories/TodoRepository';
import { Todo } from '../domain/models/Todo';

let todos: Todo[] = [];

export const TodoApiRepository: TodoRepository = {
  async getAllTodos(): Promise<Todo[]> {
    return [...todos]; 
  },

  async getTodoById(id: string): Promise<Todo | null> {
    return todos.find((todo) => todo.id === id) || null;
  },

  async addTodo(todo: Todo): Promise<void> {
    todos = [...todos, todo]; 
  },

  async updateTodo(todo: Todo): Promise<void> {
    todos = todos.map((t) => (t.id === todo.id ? todo : t)); 
  },

  async deleteTodo(id: string): Promise<void> {
    todos = todos.filter((t) => t.id !== id); 
  },
};

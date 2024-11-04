import { Todo } from '../models/Todo';

export interface TodoRepository {
  getAllTodos(): Promise<Todo[]>;
  getTodoById(id: string): Promise<Todo | null>;
  addTodo(todo: Todo): Promise<void>;
  updateTodo(todo: Todo): Promise<void>;
  deleteTodo(id: string): Promise<void>;
}
import { Todo, createTodo } from './models/Todo';
import { TodoRepository } from './repositories/TodoRepository';

export const addTodo = (repository: TodoRepository) => async (title: string): Promise<void> => {
    const newTodo = createTodo(Date.now().toString(), title);
    await repository.addTodo(newTodo);
};

export const deleteTodo = (repository: TodoRepository) => async (
    id: string
): Promise<void> => {
    await repository.deleteTodo(id);
};

export const toggleTodoCompletion = (repository: TodoRepository) => async (
    todo: Todo
): Promise<void> => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await repository.updateTodo(updatedTodo);
};

export const updateTodo = (repository: TodoRepository) => async (
    id: string,
    title: string
): Promise<void> => {
    const updatedTodo = { id, title, completed: false };
    await repository.updateTodo(updatedTodo);
};
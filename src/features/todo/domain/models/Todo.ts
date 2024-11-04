export type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

export const createTodo = (id: string, title: string): Todo => ({
    id,
    title,
    completed: false,
});
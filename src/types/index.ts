export type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export type CreateForm = {
    title: string;
    description: string;
};
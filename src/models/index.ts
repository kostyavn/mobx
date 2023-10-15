import { makeAutoObservable, observable, action } from "mobx"

// types
import { Todo } from "../types"

 class Todos {
    todos: Todo[] = []
    isLoading = false

    constructor() {
        makeAutoObservable(this, {
            todos: observable,
            isLoading: observable,
            createTodo: action,
            removeTodo: action
        })
    }

    createTodo(newTodo: Omit<Todo, 'id'>) {
        const todo = {
            id: `${Math.random()}`,
            ...newTodo
        }
        this.todos.push(todo) 
    }

    removeTodo (id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    // completeTodo(todo: Todo) {
    // }
}

export default new Todos()
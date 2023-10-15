import { FC } from 'react'
import { observer } from "mobx-react-lite"
import { toJS } from 'mobx'

// models
import Todos from '../models'

const TodoList:FC = observer(() => {
    const { todos } = Todos
    console.log('todos: ', todos);

    // const isTodosEmpty = todosList.todoList.length === 0

    // if (isTodosEmpty) return <div>You haven't any todos:( </div> 

    return (
      <div>TodoList</div>
    )
  })

export default TodoList
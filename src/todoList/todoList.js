import { useContext } from 'react'
import { TodoListContext } from '../context/todoListContext'
import { Todo } from '../todo/todo'
import './todoList'

export const TodoList = () => {
    const { todos } = useContext(TodoListContext)
    
    return <div>
        <ul className='list__todo'>
            {todos.map((todo, index) => <Todo todo={todo} index={index} />)}
        </ul>
    </div>
}
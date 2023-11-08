import { useContext } from "react"
import { TodoListContext } from "../context/todoListContext"
import { Button } from "../button/button"
import './todo.css'

export const Todo = ({todo, index}) => {
    const { todos, setTodos } = useContext(TodoListContext)
    
    const handleComplete = (complete, id) => {
        let newTodos = [...todos]
        newTodos[id].complete = !complete
        setTodos(newTodos)
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    return (
        <p className={`todo${todo.complete ? ' complete' : ''}`} 
            key={todo.id} 
            id={todo.id} 
            style={{backgroundColor: todo.color}} 
            onDoubleClick={e => {
                e.preventDefault()
                handleComplete(todo.complete, index)}}
        >
            <span>{todo.title}</span>
            <Button className="btn__delete" 
                onClick={e => {
                    e.preventDefault()
                    handleDeleteTodo(todo.id)}}
            >
                X
            </Button>
        </p>
    )
}
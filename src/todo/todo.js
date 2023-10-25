import { useContext } from "react"
import { TodoListContext } from "../context/todoListContext"
import Draggable from "react-draggable"
import { Button } from "../button/button"
import './todo.css'

export const Todo = ({todo, index}) => {
    const { todos, setTodos } = useContext(TodoListContext)

    const updatePosition = (data, index) => {
        let newTodos = [...todos]
        newTodos[index].defaultPosition = { x: data.x, 
                                            y: data.y}
        setTodos(newTodos)
    }
    
    const handleComplete = (complete, id) => {
        let newTodos = [...todos]
        newTodos[id].complete = !complete
        setTodos(newTodos)
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    return <Draggable key={todo.id}
        defaultPosition={todo.defaultPosition}
        onStop={(e, data) => {
            updatePosition(data, index)
        }}>
            <li className={`todo${todo.complete ? ' complete' : ''}`}
                key={todo.id} 
                style={{backgroundColor: todo.color}}
                onDoubleClick={e => handleComplete(todo.complete, index)}>
                    <span>{todo.title}</span>
                    <Button className="btn__delete"
                        onClick={e => handleDeleteTodo(todo.id)}>
                            X
                    </Button>
            </li>
    </Draggable>
}
import { useContext, useState } from "react"
import { TodoListContext } from "../context/todoListContext"
import uuid from 'react-uuid'
import randomcolor from 'randomcolor'
import { Button } from "../button/button"
import './form.css'

export const Form = () => {
    const { todos, setTodos } = useContext(TodoListContext)

    const [title, setTitle] = useState('')

    const addTodo = title => {
        if (todos.find(todo => todo.title === title)) {
            return alert('This todo has already existed')
        }
        
        setTodos([...todos, 
            {id: uuid(), 
             dataGrid: {x: 0, y: 0, w: 2.6, h: 2}, 
             title, 
             color: randomcolor({luminosity: 'light'}), 
             complete: false, 
             isDelete: false,
            }
        ])
    }
    
    const handleOnSubmit = e => {
        e.preventDefault()
        addTodo(title)
        setTitle('')
    }
    
    const handleOnClickClearButton = e => {
        e.preventDefault()
        setTodos([])
    }

    return <form onSubmit={handleOnSubmit} id='form'>
        <input 
            type='text' 
            value={title} 
            placeholder='Type a new task' 
            onChange={e => setTitle(e.target.value)} 
            require='true'
        />
        <div className="buttons">
            <Button className="btn__add" 
                type='submit'>
                    Add
            </Button>
            <Button className="btn__clear" 
                onClick={handleOnClickClearButton}>
                    Clear
            </Button>
        </div>
    </form>
}
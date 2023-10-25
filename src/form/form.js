import { useContext, useState } from "react"
import uuid from 'react-uuid'
import randomcolor from 'randomcolor'
import { TodoListContext } from "../context/todoListContext"
import { Button } from "../button/button"
import './form.css'

export const Form = () => {
    const { todos, setTodos } = useContext(TodoListContext)

    const [title, setTitle] = useState('')

    const addTodo = title => {
        if (todos.find(todo => todo.title === title)) return alert('This todo has already existed')
        
        setTodos(
            [...todos,
             {id: uuid(),
              title,
              defaultPosition: {x: 100,
                                y: -400},
              color: randomcolor({luminosity: 'light'}),
              complete: false,
             }
            ]
        )
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

    return <form 
        onSubmit={handleOnSubmit}>
            <input 
                type='text'
                value={title}
                placeholder='Type a new task'
                onChange={e => setTitle(e.target.value)}
                required
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
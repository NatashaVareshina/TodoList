import { createContext, useState, useEffect } from 'react'

export const TodoListContext = createContext()

export const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos")
        
        if (savedTodos) {
            try {
                return JSON.parse(savedTodos)
            } catch (e) {
            }
        }
        
        return []
    })
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    return (
        <TodoListContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoListContext.Provider>
    )
}
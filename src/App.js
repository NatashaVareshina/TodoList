import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import '/node_modules/react-grid-layout/css/styles.css'
import { useContext } from "react"
import { TodoListContext } from "./context/todoListContext"
import { Form } from './form/form'
import uuid from 'react-uuid'
import { Todo } from './todo/todo'
import './App.css'

export default function App() {
  const { todos, setTodos } = useContext(TodoListContext)
  
  const onDragCallback = (layout, 
    oldItem, 
    newItem, 
    placeholder, 
    e, 
    element) => {
      const newTodos = todos.map(todo => {
        if (todo.id === element.id) {
          return { ...todo, 
            dataGrid: {...todo.dataGrid, 
              x: newItem.x, y: newItem.y}
          }
        }
        
        return todo
      })
      
      setTodos(newTodos)
  }
  
  return (
    <main>
      <ResponsiveGridLayout 
        className='layout'
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}} 
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} 
        compactType={null} 
        width={1200} 
        margin={[20, 20]} 
        rowHeight={30} 
        preventCollision={true} 
        isResizable={false} 
        onDragStop={onDragCallback}>
          <div key='form' 
            data-grid={{x: 4.5, y: 6, w: 3, h: 3, static: true}}>
              <Form />
          </div>
          {todos.map((todo, index) => {
            return <div key={todo.id} 
              id={todo.id} 
              data-grid={todo.dataGrid}>
                <Todo todo={todo} index={index} />
            </div>
          })}
      </ResponsiveGridLayout>
    </main>
  )
}
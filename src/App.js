import { WidthProvider, Responsive } from 'react-grid-layout'
import '/node_modules/react-grid-layout/css/styles.css'
import { useContext } from "react"
import { TodoListContext } from "./context/todoListContext"
import { Form } from './form/form'
import uuid from 'react-uuid'
import { Todo } from './todo/todo'
import './App.css'

const Grid = WidthProvider(Responsive)

export default function App() {
  const { todos } = useContext(TodoListContext)
  
  return (
    <main>
      <Grid 
        className='layout' 
        layouts={todos} 
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}} 
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} 
        compactType={null} 
        width={1200} 
        margin={[20, 20]} 
        rowHeight={30} 
        preventCollision={true} 
        isResizable={false}>
          <div key='form' 
            data-grid={{x: 4.5, y: 6, w: 3, h: 3, static: true}}>
              <Form />
          </div>
          {todos.map((todo, index) => {
            return <div key={uuid()} data-grid={{x: 0, y: 0, w: 2.6, h: 2}}>
              <Todo todo={todo} index={index} />
            </div>
          })}
      </Grid>
    </main>
  )
}
import { TodoListContextProvider } from './context/todoListContext'
import { Form } from './form/form'
import { TodoList } from './todoList/todoList'
import './App.css'

export default function App() {
  return (
    <TodoListContextProvider>
      <main>
        <Form />
        <TodoList />
      </main>
    </TodoListContextProvider>
  )
}
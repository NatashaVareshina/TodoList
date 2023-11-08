import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoListContextProvider } from './context/todoListContext'
import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>
)
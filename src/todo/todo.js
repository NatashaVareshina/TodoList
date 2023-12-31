import { useContext } from "react";
import { TodoListContext } from "../context/todoListContext";
import { Button } from "../button/button";
import "./todo.css";

export const Todo = ({ todo }) => {
  const { todos, setTodos, breakpoint } = useContext(TodoListContext);

  const handleIsComplete = (id, isComplete) => {
    const newTodos = todos[breakpoint].map((todo) =>
      todo.id === id ? { ...todo, isComplete: !isComplete } : todo
    );

    setTodos({
      ...todos,
      lg: newTodos,
      md: newTodos,
      sm: newTodos,
      xs: newTodos,
      xxs: newTodos,
    });
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos[breakpoint].map((todo) =>
      todo.id === id
        ? {
            ...todo,
            dataGrid: { ...todo.dataGrid, w: 0, h: 0 },
            isDelete: true,
          }
        : todo
    );

    setTodos({
      ...todos,
      lg: newTodos,
      md: newTodos,
      sm: newTodos,
      xs: newTodos,
      xxs: newTodos,
    });
  };

  return (
    <p
      className={`todo${todo.isComplete ? " complete" : ""}`}
      style={{ backgroundColor: todo.color }}
      onDoubleClick={(e) => {
        e.preventDefault();
        handleIsComplete(todo.id, todo.isComplete);
      }}
    >
      <span>{todo.title}</span>
      <Button
        className="btn__delete"
        onClick={(e) => {
          e.preventDefault();
          handleDeleteTodo(todo.id);
        }}
      >
        X
      </Button>
    </p>
  );
};

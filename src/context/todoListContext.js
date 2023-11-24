import { createContext, useState, useEffect } from "react";

export const TodoListContext = createContext();

export const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {}
    }

    return { lg: [], md: [], sm: [], xs: [], xxs: [] };
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [breakpoint, setBreakpoint] = useState("lg");

  return (
    <TodoListContext.Provider
      value={{ todos, setTodos, breakpoint, setBreakpoint }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

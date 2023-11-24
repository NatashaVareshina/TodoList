import { useContext, useState } from "react";
import { TodoListContext } from "../context/todoListContext";
import uuid from "react-uuid";
import randomcolor from "randomcolor";
import { Button } from "../button/button";
import "./form.css";

export const Form = ({ id }) => {
  const { todos, setTodos, breakpoint } = useContext(TodoListContext);

  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    if (todos[breakpoint].find((todo) => todo.title === title)) {
      return alert("This todo has already existed");
    }

    setTodos({
      ...todos,
      [breakpoint]: [
        ...todos[breakpoint],
        {
          id: uuid(),
          dataGrid: { x: 0, y: 0, w: 2.6, h: 1.5, minW: 0, minH: 0 },
          title,
          color: randomcolor({ luminosity: "light" }),
          isComplete: false,
          isDelete: false,
        },
      ],
      lg: [
        ...todos["lg"],
        {
          id: uuid(),
          dataGrid: { x: 0, y: 0, w: 2.6, h: 1.5, minW: 0, minH: 0 },
          title,
          color: randomcolor({ luminosity: "light" }),
          isComplete: false,
          isDelete: false,
        },
      ],
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleOnClickClearButton = (e) => {
    e.preventDefault();
    setTodos({ lg: [], md: [], sm: [], xs: [], xxs: [] });
  };

  return (
    <form onSubmit={handleOnSubmit} id={id}>
      <input
        type="text"
        value={title}
        placeholder="Type a new task"
        onChange={(e) => setTitle(e.target.value)}
        required={true}
      />
      <div className="buttons">
        <Button className="btn__add" type="submit">
          Add
        </Button>
        <Button className="btn__clear" onClick={handleOnClickClearButton}>
          Clear
        </Button>
      </div>
    </form>
  );
};

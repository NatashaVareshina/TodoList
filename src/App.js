import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import { useContext } from "react";
import { TodoListContext } from "./context/todoListContext";
import { Form } from "./form/form";
import { Todo } from "./todo/todo";
import "./App.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function App() {
  const { todos, setTodos, breakpoint, setBreakpoint } =
    useContext(TodoListContext);

  const newBreakpoint = (newBreakpoint) => {
    setBreakpoint(newBreakpoint);
  };

  const newLayout = (currentLayout) => {
    const newTodos = todos[breakpoint]
      .map((todo) => {
        const currentLayoutElement = currentLayout.filter(
          (element) => element.i === todo.id
        )[0];

        return {
          ...todo,
          dataGrid: {
            ...todo.dataGrid,
            x: currentLayoutElement.x,
            y: currentLayoutElement.y,
          },
        };
      })
      .filter((element) => element.isDelete === false);

    setTodos({
      ...todos,
      [breakpoint]: newTodos,
      lg: newTodos,
    });

    if (breakpoint === "md") {
      const newTodos = todos["lg"]
        .map((todo) => {
          return {
            ...todo,
            dataGrid: { ...todo.dataGrid, x: todo.dataGrid.x + 1 },
          };
        })
        .filter((element) => element.isDelete === false);

      setTodos({ ...todos, [breakpoint]: newTodos });

      return;
    }

    if (breakpoint === "sm") {
      const newTodos = todos["lg"]
        .map((todo) => {
          return {
            ...todo,
            dataGrid: {
              ...todo.dataGrid,
              x: todo.dataGrid.x + 2,
            },
          };
        })
        .filter((element) => element.isDelete === false);

      setTodos({ ...todos, [breakpoint]: newTodos });

      return;
    }

    if (breakpoint === "xs") {
      const newTodos = todos["lg"]
        .map((todo) => {
          return {
            ...todo,
            dataGrid: {
              ...todo.dataGrid,
              x: todo.dataGrid.x + 3,
            },
          };
        })
        .filter((element) => element.isDelete === false);

      setTodos({ ...todos, [breakpoint]: newTodos });

      return;
    }

    if (breakpoint === "xxs") {
      const newTodos = todos["lg"]
        .map((todo) => {
          return {
            ...todo,
            dataGrid: {
              ...todo.dataGrid,
              x: todo.dataGrid.x + 4,
            },
          };
        })
        .filter((element) => element.isDelete === false);

      setTodos({ ...todos, [breakpoint]: newTodos });

      return;
    }
  };

  return (
    <main id="mainWidth">
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        compactType={null}
        isBounded={true}
        style={{ height: "96vh" }}
        margin={[30, 30]}
        rowHeight={30}
        preventCollision={true}
        isResizable={false}
        onBreakpointChange={newBreakpoint}
        onLayoutChange={newLayout}
      >
        <div key="form" data-grid={{ x: 4.5, y: 6, w: 3, h: 3, static: true }}>
          <Form />
        </div>
        {todos[breakpoint].map((todo) => {
          return (
            <div key={todo.id} id={todo.id} data-grid={todo.dataGrid}>
              <Todo todo={todo} />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </main>
  );
}

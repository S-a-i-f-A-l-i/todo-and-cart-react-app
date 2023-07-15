import React from "react";
import { TodoInput, TodoItem } from "../components";
import { useAppContext } from "./../context/Context";

const Todo = () => {
  // todos item array destructuring from AppContext
  const {
    appData: {
      todo: { todos },
    },
    setAppData,
  } = useAppContext();
  return (
    <div>
      {/* todo Input */}
      <TodoInput />
      {/* todos list */}
      {todos &&
        todos.map((el, index) => {
          return (
            <TodoItem
              key={index}
              name={el.name}
              status={el.status}
              index={index}
              setAppData={setAppData}
            />
          );
        })}
    </div>
  );
};

export default Todo;

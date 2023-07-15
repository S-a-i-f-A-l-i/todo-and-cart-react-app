import React, { useState } from "react";
import styles from "./../assets/styles/TodoInput.module.css";
import { useAppContext } from "./../context/Context";

const TodoInput = () => {
  const { setAppData } = useAppContext();
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputTodo);
    setAppData((prev) => {
      return {
        ...prev,
        todo: {
          ...prev.todo,
          totalTodos: prev.todo.totalTodos + 1,
          todos: [...prev.todo.todos, inputTodo],
        },
      };
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.add_todo}>
      <input
        type="text"
        className={styles.add_todo__input}
        placeholder="Todo Name..."
        required={true}
        value={inputTodo}
        // onChange={(e) => {
        //   if (e.target.validity.valueMissing) {
        //     e.target.setCustomValidity("Name is required");
        //   } else {
        //     e.target.setCustomValidity("");
        //   }
        // }}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className={styles.add_todo__button}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;

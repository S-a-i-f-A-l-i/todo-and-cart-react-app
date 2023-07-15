import React, { useState } from "react";
import { TodoInput, TodoItem } from "../components";

const Todo = () => {
  return (
    <div>
      <TodoInput />
      <TodoItem />
    </div>
  );
};

export default Todo;

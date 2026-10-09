

import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice JavaScript", completed: false },
    { id: 3, title: "Learn Node.js", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
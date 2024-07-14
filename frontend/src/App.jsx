import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      Hi there! This is a React app using Vite.
      <CreateTodo></CreateTodo>
      <Todo
        todo={[
          { title: "Todo 1", description: "Description 1", completed: false },
          { title: "Todo 2", description: "Description 2", completed: true },
          { title: "Todo 3", description: "Description 3", completed: false },
        ]}
      ></Todo>
    </div>
  );
}

export default App;

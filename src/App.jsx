
import './App.css'
import { useEffect, useState } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({ text, priority }) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };

    setTodos((prevTodos) => [
      newTodo,
      ...prevTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const updatePriority = (id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, priority }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const remainingTodos = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <Header
          darkMode={darkMode}
          onToggleTheme={() =>
            setDarkMode((prev) => !prev)
          }
        />

        <TodoForm onAdd={addTodo} />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          remaining={remainingTodos}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onPriorityChange={updatePriority}
        />
      </div>
    </div>
  );
}

export default App;

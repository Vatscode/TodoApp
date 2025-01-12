import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch existing todos
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Function to update a todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      <div className="todo-container">
        <CreateTodo addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>React ToDo App</h1>
      <div className="input-wrapper">
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }} />
        <button
          className="add-button"
          onClick={addTodo}
        >Add</button>
      </div>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo" key={index}>
              <li> {todo} </li>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;

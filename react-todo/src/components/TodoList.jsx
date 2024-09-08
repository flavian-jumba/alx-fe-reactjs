// src/components/TodoList.jsx
import React, { useState } from 'react';

// Initial todo data for demonstration
const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo List', completed: false },
  { id: 3, text: 'Write Tests', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodo.trim(), completed: false },
      ]);
      setNewTodo('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the toggle
              deleteTodo(todo.id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

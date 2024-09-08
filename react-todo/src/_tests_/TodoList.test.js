// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    render(<TodoList />);
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Check if the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Toggle the completion status
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    // Delete the first todo
    fireEvent.click(deleteButton);

    // Check if the todo is deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});

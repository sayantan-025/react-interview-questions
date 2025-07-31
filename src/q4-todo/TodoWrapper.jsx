import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./Todo.css";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const id = new Date().getTime();
    setTodos([
      ...todos,
      { id: id, task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (value, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: value, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h2 className="todo-heading">📝 Todo List</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} editTask={editTask} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;

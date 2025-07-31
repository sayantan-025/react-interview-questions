import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-item">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="todo-actions">
        <button onClick={() => editTodo(task.id)}>edit</button>
        <button onClick={() => deleteTodo(task.id)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;

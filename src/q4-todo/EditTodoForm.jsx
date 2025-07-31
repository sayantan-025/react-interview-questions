import React, { useState } from "react";

const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">update task</button>
    </form>
  );
};

export default EditTodoForm;

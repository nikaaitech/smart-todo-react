function TodoItem({ todo, onToggle, onDelete, onPriorityChange }) {
  return (
    <div
      className={`todo-item priority-${todo.priority.toLowerCase()} ${
        todo.completed ? "completed" : ""
      }`}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span className="todo-text">{todo.text}</span>
      </div>

      <div className="todo-actions">
        <select
          value={todo.priority}
          onChange={(e) =>
            onPriorityChange(todo.id, e.target.value)
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
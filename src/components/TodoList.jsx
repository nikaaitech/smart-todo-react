import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onToggle,
  onDelete,
  onPriorityChange,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos found.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onPriorityChange={onPriorityChange}
        />
      ))}
    </div>
  );
}

export default TodoList;
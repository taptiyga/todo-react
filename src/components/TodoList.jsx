import TodoItem from "./TodoItem";

function TodoList(props) {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
    filteredTasks,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet.</div>;
  }
  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">No tasks found.</div>;
  }
  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          {...task}
          onDeleteButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}
    </ul>
  );
}
export default TodoList;

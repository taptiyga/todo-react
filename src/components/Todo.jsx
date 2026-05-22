import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

function Todo() {
  const tasks = [
    { id: "task-1", title: "Купить молока", isDone: false },
    { id: "task-2", title: "Пойти в спортзал", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("DelAllTasks");
  };

  const deleteTask = (taskId) => {
    console.log(`Del task with id: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? "ok" : "not ok"}`);
  };

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  };

  const addTask = () => {
    console.log("Task add");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((t) => t.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
}
export default Todo;

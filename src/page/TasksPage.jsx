import Todo from "../components/Todo/Todo";
import { TasksProvider } from "../context/TasksContext";


function TasksPage() {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
}
export default TasksPage;

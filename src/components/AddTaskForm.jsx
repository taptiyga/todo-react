import Button from "./Button";
import Field from "./Field";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
function AddTaskForm() {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
export default AddTaskForm;

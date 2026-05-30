import Button from "../Button/Button";
import Field from "../Field/Field";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

function AddTaskForm({ styles }) {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const [error, setError] = useState("");

  const cleareNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = cleareNewTaskTitle.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isNewTaskTitleEmpty) {
      addTask(cleareNewTaskTitle);
    }
  };
  const onInput = (e) => {
    const { value } = e.target;
    const cleareValue = value.trim();
    const hasOnlySpaces = value.length > 0 && cleareValue.length === 0;
    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "Title cannot contain only spaces" : "");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className={styles.field}
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  );
}
export default AddTaskForm;

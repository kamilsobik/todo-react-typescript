import React, { useState } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";

function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleNewTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };

  const handleAddTask = () => {
    setTaskList([...taskList, newTaskText]);

    setNewTaskText("");
  };

  const handleEnterInInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
    console.log(event.key);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={newTaskText}
          onInput={handleNewTaskInput}
          onKeyUp={handleEnterInInput}
        ></input>
        <button
          type="button"
          style={{ marginLeft: "12px" }}
          onClick={handleAddTask}
        >
          Dodaj task
        </button>
      </div>

      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;

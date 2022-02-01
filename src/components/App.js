import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's  the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(() => TASKS)

  const [selectedClass, setSelectedClass] = useState("All");

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
              categories={CATEGORIES} 
              selectedClass={selectedClass} 
              setSelectedClass={setSelectedClass}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={setTasks} />
      <TaskList tasks={tasks} selectedClass={selectedClass} setTasks={setTasks}/>
    </div>
  );
}

export default App;

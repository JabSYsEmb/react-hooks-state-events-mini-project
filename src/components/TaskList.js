import React from "react";
import Task from "./Task";


function TaskList({tasks=[],selectedClass,setTasks}) {
  const displayedTask = tasks.map(task => <Task key={task.text} task={task.text} setTasks={setTasks} category={task.category}/>);

  return (
    <div className="tasks">
      {selectedClass==="All" ? displayedTask:displayedTask.filter(item => item.props.category===selectedClass)}
    </div>
  );
}

export default TaskList;

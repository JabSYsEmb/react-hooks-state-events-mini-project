import React from "react";

function Task({category, task,setTasks}) {
  const clickHandle = () => {
    setTasks(prev => prev.filter(item => item.text !== task))
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={clickHandle}>X</button>
    </div>
  );
}

export default Task;

import { useState } from "react";
import "./Task.css";
export const Task = ({ text, deleteTask , completed, completedTaskFn}) => {
  

  const onClickFn = () => {
  setCompleted((completedStatus) => !completedStatus);
  };
  return (
    <div className="task-container">
      {completed ? (
        <span onClick={completedTaskFn} className="material-symbols-outlined check-task">
          check_box
        </span>
      ) : (
        <span onClick={completedTaskFn} className="material-symbols-outlined incomplete-task">
          check_box_outline_blank
        </span>
      )}
   
      <p className={`task ${completed ? `task-complete` : ""}`}>{text}</p>
      
      
      <span className="material-symbols-outlined delete-task" onClick={deleteTask}>disabled_by_default</span>
    </div>
  );
};

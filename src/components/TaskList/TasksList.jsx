import { SearchTask } from "../SearchTask/SearchTask";
import "./TasksList.css";
import studying from "../../assets/studying.png";

export const TasksList = ({ children, searchValue, setSearchValue }) => {
  return (
    <article className="tasks-list-container">
      <div className="tasks-list">
        <SearchTask searchValue={searchValue} setSearchValue={setSearchValue} />
        <h3 className="generic-title">Tasks</h3>
        {children.length == 0 ? (
          <div className="no-task-image">
               <img src={studying} className="no-tasks" alt="no tasks" />
          </div>
         
        ) : (
          <div className="tasks-container">{children}</div>
        )}
      </div>
    </article>
  );
};

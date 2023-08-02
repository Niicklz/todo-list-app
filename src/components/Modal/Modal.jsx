import { useRef } from "react";
import "./Modal.css";

export const Modal = ({
  modalStatus,
  setModalStatus,
  aggreeTask,
  newTask,
  setNewTask,
}) => {


  const submitTask = (event)=> {
    event.preventDefault()
    console.log("test");
    aggreeTask()
  }
  return (
    <div className={`modal-container`}>
      <div className="modal">
        <div className="add-task-container">
          <h3 className="add-task-generic-title">ADD A NEW TASK</h3>
        </div>
        <form onSubmit={submitTask}>
        <label htmlFor="newTask" className="new-task">
          <input
            type="text"
            id="newTask"
            placeholder="Hacer cena..."
            value={newTask.trimStart()}
            onChange={(event) => {
              setNewTask(event.target.value)
            }}
            maxLength={60}
          />
        </label>
        <div className="buttons-container">
          <button
            onClick={() => setModalStatus((modalStatus) => !modalStatus)}
            className="new-task-btn"
            type="button"
          >
            <span data-notranslate className="material-symbols-outlined notranslate">cancel</span>
          </button>
          <button  className="new-task-btn" type="submit">
            <span data-notranslate className="material-symbols-outlined notranslate">add_circle</span>
          </button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

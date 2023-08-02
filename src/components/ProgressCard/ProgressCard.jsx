import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AddButton } from "../AddButton/AddButton";
import "./ProgressCard.css"
export const ProgressCard = ({progress, finished, totalTasks, modalStatus, setModalStatus}) => {
  
  let percentage = finished/totalTasks*100
  
  const  changeStatus = ()=> {
    setModalStatus((modalStatus)=> !modalStatus)
  }
 
  return (
    <>
     <article className="progress-card-container">
    <h4 className="progress-text">Progress</h4>
    <div className="finish-and-progress-bar">
      <div className="current-progress-container">
        <p className="progress">{progress} In progress</p>
        <p className="progress">{finished} Finished</p>
      </div>
      <div className="bar-container">
        <CircularProgressbar value={totalTasks == 0? 100 : percentage}  strokeWidth={10}  text={`${totalTasks == 0? 100 : Math.round(percentage)}%`}/>
      </div>
    </div>
    <AddButton onClick={changeStatus}/>
  </article>
  
    </>
   
  )
}

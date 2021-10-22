import React, { useState } from "react";
import AddTask from "./AddTask";
import SingleTask from "./SingleTask";
import close from "../images/close.svg";

const DayDetails = ({day, month, setShowDayDetails, tasks, setTasks, date} : any) => {
  const [actionType, setActionType] = useState("AddTask")


  const setNameMonth = (monthNumber:any) => {
    switch(monthNumber) {
      case 1:
        return "Styczeń";
      case 2:
        return "Luty";
      case 3:
        return "Marzec";
      case 4:
        return "Kwiecień";
      case 5: 
        return "Maj";
      case 6:
        return "Czerwiec";
      case 7:
        return "Lipiec";
      case 8: 
        return "Sierpień";
      case 9: 
        return "Wrzesień";
      case 10:
        return "Październik";
      case 11:
        return "Listopad";
      case 12:
        return "Grudzień"
    }
  }

  return (
    <div className="day-details-wrapper">
      <div className="top-wrapper">
        <h2>{day} {setNameMonth(month)} {date.year}r.</h2>
        <img src={close} onClick={() => setShowDayDetails(false)} alt="zamknij"/>
      </div>
      <div className="tasks-wrapper">
        <div className="tasks">
          {tasks.map((task:any) => <SingleTask key={task.id} setTasks={setTasks} id={task.id} title={task.title} text={task.text} time={task.time} priority={task.priority} tasks={tasks} /> )}
        </div>
        <div className="actions-wrapper">
          <div className="types">
            <p onClick={() => setActionType("AddTask")} className={actionType === "AddTask" ? "choosed" : ""}>Dodaj nowe zadanie</p>
            <p onClick={() => setActionType("Free")} className={actionType === "Free" ? "choosed" : ""}>Zaplanuj dzień wolny</p>
          </div>
          {actionType === "AddTask" ? <AddTask setTasks={setTasks} /> : null}
        </div>
      </div>
    </div>
  )
}

export default DayDetails;
import React, { useState, useEffect } from "react";
import DayDetails from "./DayDetails";

const SingleDay = ({day, month, date}: any) => {
  const [tasks, setTasks] = useState([])
  const [showDayDetails, setShowDayDetails] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const customId = month === 10 || month === 11 || month === 12  ? "ab" : "";

  let newDate = new Date()
  let actualMonth = newDate.getMonth() + 1;
  let actualYear = newDate.getFullYear();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="day-wrapper" onClick={() => setShowDayDetails(prevState => !prevState)} id={`a${day}${month}${customId}`}>
        <div className="day-number">
          <h2 className={(day === date.date && month === actualMonth && actualYear === date.year) ? "today" : ""}>{day}</h2>
        </div>
        <div className="tasks">
          {width > 650 && tasks.slice(0, width < 800 ? 1 : 2).map((task:any) => <p key={task.id}>{width < 865 ? "" : task.time} {task.title}</p>)}
          {width > 650 && tasks.length > 2 ? <p>{tasks.length - (width < 800 ? 1 : 2)} więcej zadania...</p> : null}
          {width <= 650 && tasks.length >= 1 ? <p className="tasksNum">Ilość zadań: {tasks.length}</p> : null}
        </div>
      </div>
      {showDayDetails && <DayDetails tasks={tasks} setTasks={setTasks} day={day} month={month} setShowDayDetails={setShowDayDetails} date={date}/>}
    </>
  )
}

export default SingleDay;
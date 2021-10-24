import React, { useState, useContext, FC } from "react";
import AddTask from "./AddTask";
import SingleTask from "./SingleTask";
import close from "../images/close.svg";
import { DateContext } from "../context/dateContext";
import { TasksContext } from "../context/tasksContext";
import Free from "./Free";

interface Task {
  id: number;
  title: string;
  text: string;
  time: string;
  priority: boolean;
}

interface Props {
  day: number;
  month: number;
}

const DayDetails: FC<Props> = ({ day, month }: Props) => {
  const [actionType, setActionType] = useState<string>("AddTask");
  const { date, width } = useContext(DateContext);
  const { tasks, setShowDayDetails } = useContext(TasksContext);

  const setNameMonth = (monthNumber: number) => {
    switch (monthNumber) {
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
        return "Grudzień";
    }
  };

  const prioTasks = tasks.filter((task: Task) => task.priority);
  const noPrioTasks = tasks.filter((task: Task) => !task.priority);

  return (
    <div className={width > 891 ? "day-details-wrapper flip-in-hor-bottom" : "day-details-wrapper"}>
      <div className="top-wrapper">
        <h2>
          {day} {setNameMonth(month)} {date.year}r.
        </h2>
        <img
          src={close}
          onClick={() => setShowDayDetails(false)}
          alt="zamknij"
        />
      </div>
      <div className="tasks-wrapper">
        <div className="tasks">
          {prioTasks.map((task: Task) => (
            <SingleTask
              key={task.id}
              id={task.id}
              title={task.title}
              text={task.text}
              time={task.time}
              priority={task.priority}
            />
          ))}
          {noPrioTasks.map((task: Task) => (
            <SingleTask
              key={task.id}
              id={task.id}
              title={task.title}
              text={task.text}
              time={task.time}
              priority={task.priority}
            />
          ))}
        </div>
        <div className="actions-wrapper">
          <div className="types">
            <p
              onClick={() => setActionType("AddTask")}
              className={actionType === "AddTask" ? "choosed" : ""}
            >
              Dodaj nowe zadanie
            </p>
            <p
              onClick={() => setActionType("Free")}
              className={actionType === "Free" ? "choosed" : ""}
            >
              Zaplanuj dzień wolny
            </p>
          </div>
          {actionType === "AddTask" ? <AddTask /> : null}
          {actionType === "Free" ? <Free /> : null}
        </div>
      </div>
    </div>
  );
};

export default DayDetails;

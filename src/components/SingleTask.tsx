import React, { useContext, FC } from "react";
import delete_icon from "../images/exit.png";
import important_delete from "../images/exit_important.png";
import { TasksContext } from "../context/tasksContext";
import { DateContext } from "../context/dateContext";

interface Task {
  id: number;
  title: string;
  text: string;
  time: string;
  priority: boolean;
}

interface Props {
  title: string;
  text: string;
  time: string;
  priority: boolean;
  id: number;
}

const SingleTask: FC<Props> = ({ title, text, time, priority, id }: Props) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { width } = useContext(DateContext);

  const handleDeleteTask = () => {
    const newState = tasks.filter((task: Task) => task.id !== id);
    setTasks(newState);
  };

  return (
    <div
      className={
        width > 891
          ? "single-task-wrapper slide-in-left"
          : "single-task-wrapper"
      }
      style={{
        color: priority ? "#E72020" : "unset",
        borderColor: priority ? "#E72020" : "unset",
      }}
    >
      <div className="time">
        <p>{time}</p>
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="exit">
        <img
          src={priority === true ? important_delete : delete_icon}
          alt="exit"
          onClick={() => handleDeleteTask()}
        />
      </div>
    </div>
  );
};

export default SingleTask;

import React from "react";
import delete_icon from "../images/exit.png";
import important_delete from "../images/exit_important.png";

const SingleTask = ({
  title,
  text,
  time,
  priority,
  setTasks,
  id,
  tasks,
}: any) => {
  const onClickDelete = () => {
    const newState = tasks.filter((task: any) => task.id !== id);
    setTasks(newState);
  };

  return (
    <div
      className="single-task-wrapper"
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
          onClick={() => onClickDelete()}
        />
      </div>
    </div>
  );
};

export default SingleTask;

import React, { useContext } from "react";
import { TasksContext } from "../context/tasksContext";

const Free = () => {
  const { freeDay, setFreeDay } = useContext(TasksContext);

  return (
    <div className="free-wrapper">
      <label>
        Zarezerwuj jako dzień wolny
        <input
          type="checkbox"
          checked={freeDay}
          onChange={() => setFreeDay(!freeDay)}
        />
      </label>
      {freeDay && (
        <p className="alert">Dzień wolny zostanie oznaczony zielonym kolorem.</p>
      )}
    </div>
  );
};

export default Free;

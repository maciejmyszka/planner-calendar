import React, { useContext, FC } from "react";
import { DateContext } from "../context/dateContext";
import { TasksContext } from "../context/tasksContext";

const Free: FC = () => {
  const { width } = useContext(DateContext);
  const { freeDay, setFreeDay } = useContext(TasksContext);

  return (
    <div
      className={
        width > 891 ? "free-wrapper swing-in-left-fwd" : "free-wrapper"
      }
    >
      <label>
        Zarezerwuj jako dzień wolny
        <input
          type="checkbox"
          checked={freeDay}
          onChange={() => setFreeDay(!freeDay)}
        />
      </label>
      {freeDay && (
        <p className="alert">
          Dzień wolny zostanie oznaczony zielonym kolorem.
        </p>
      )}
    </div>
  );
};

export default Free;

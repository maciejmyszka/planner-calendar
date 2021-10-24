import React, {
  useState,
  useContext,
  FC,
  MouseEvent,
  ChangeEvent,
} from "react";
import { DateContext } from "../context/dateContext";
import { TasksContext } from "../context/tasksContext";
import Alert from "./Alert";

interface Task {
  id: number;
  title: string;
  text: string;
  time: string;
  priority: boolean;
}

const AddTask: FC = () => {
  const { width } = useContext(DateContext);
  const { setTasks, tasks } = useContext(TasksContext);
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("00:00");
  const [priority, setPriority] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const addTask = (e: MouseEvent) => {
    e.preventDefault();
    if (title.length > 0) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1234),
        title,
        time,
        text,
        priority,
      };
      setTasks(tasks.concat(newTask));
      setText("");
      setTitle("");
      setPriority(false);
      setTime("00:00");
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div
      className={
        width > 891 ? "form-wrapper swing-in-right-fwd" : "form-wrapper"
      }
    >
      <p>Wpisz tytuł zadania</p>
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<any>) => setTitle(e.target.value)}
        placeholder="Dodaj tytuł"
      />
      <p>Ustaw godzinę zadania</p>
      <input
        type="time"
        value={time}
        onChange={(e: ChangeEvent<any>) => {
          setTime(e.target.value);
        }}
      />
      <p>Wpisz notatkę do zadania</p>
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<any>) => setText(e.target.value)}
        placeholder="Dodaj notatkę"
      />
      <label>
        Priorytet
        <input
          type="checkbox"
          checked={priority}
          onChange={(e: ChangeEvent<any>) => setPriority(e.target.checked)}
        />
      </label>
      <button onClick={(e: MouseEvent) => addTask(e)}>
        Dodaj zadanie do listy
      </button>
      {showAlert && <Alert setShowAlert={setShowAlert} />}
    </div>
  );
};

export default AddTask;

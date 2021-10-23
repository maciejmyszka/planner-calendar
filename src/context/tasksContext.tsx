import { createContext, Dispatch } from "react";

interface Task {
  id: number;
  title: string;
  text: string;
  time: string;
  priority: boolean;
}

interface Default {
  tasks: Array<Task>;
  setTasks: Dispatch<Array<Task>>;
  showDayDetails: boolean;
  setShowDayDetails: Dispatch<boolean>;
}

export const defaultTasks: Default = {
  tasks: [],
  setTasks: () => {},
  showDayDetails: false,
  setShowDayDetails: () => {},
};

export const TasksContext = createContext(defaultTasks);

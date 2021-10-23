import { createContext, Dispatch } from "react";

interface IDate {
  date: number;
  month: number;
  year: number;
}

interface Defaut {
  date: IDate;
  setDate: Dispatch<IDate>;
  width: number;
  setWidth: Dispatch<number>;
}

let newDate: Date = new Date();
let actualDate: number = newDate.getDate();
let actualMonth: number = newDate.getMonth() + 1;
let actualYear: number = newDate.getFullYear();

export const defaultObject: Defaut = {
  date: {
    date: actualDate,
    month: actualMonth,
    year: actualYear,
  },
  setDate: () => {},
  width: window.innerWidth,
  setWidth: () => {},
};

export const DateContext = createContext(defaultObject);

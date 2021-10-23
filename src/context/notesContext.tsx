import { createContext, Dispatch } from "react";

interface Note {
  id: number;
  text: string;
  time: string;
  date: string;
}

interface Default {
  notes: Array<Note>;
  setNotes: Dispatch<Array<Note>>
}

export const defaultNotes: Default = {
  notes: [],
  setNotes: () => {},
};

export const NotesContext = createContext(defaultNotes);
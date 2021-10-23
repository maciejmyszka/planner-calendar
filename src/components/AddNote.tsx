import React, { useState, useEffect, useContext, FC, ChangeEvent } from "react";
import { NotesContext } from "../context/notesContext";

interface Note {
  id: number;
  text: string;
  time: string;
  date: string;
}

const AddNote: FC = () => {
  const [text, setText] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { setNotes, notes } = useContext(NotesContext);

  useEffect(() => {
    let newDate: Date = new Date();
    let hours: number = newDate.getHours();
    let minutes: number = newDate.getMinutes();
    let date: number = newDate.getDate();
    let month: number = newDate.getMonth();
    let year: number = newDate.getFullYear();
    const actualTime: string = `${hours <= 9 ? 0 : ""}${hours}:${minutes <= 9 ? 0 : ""}${minutes}`;
    const actualDate: string = `${date <= 9 ? 0 : ""}${date}.${month <= 9 ? 0 : ""}${month}.${year}`;
    setTime(actualTime);
    setDate(actualDate);
  }, []);

  const onClickAddNote = () => {
    const newNote: Note = {
      id: Math.floor(Math.random() * 1234),
      text,
      time,
      date,
    };
    setNotes(notes.concat(newNote));
    setText("");
  };

  return (
    <div className="add-note-wrapper">
      <p>Wpisz tekst notatki</p>
      <textarea
        value={text}
        onChange={(e: ChangeEvent<any>) => setText(e.target.value)}
      ></textarea>
      <button onClick={() => onClickAddNote()}>Dodaj</button>
    </div>
  );
};

export default AddNote;

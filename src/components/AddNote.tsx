import React, { useState, useEffect, useContext, FC, ChangeEvent } from "react";
import { NotesContext } from "../context/notesContext";
import Alert from "./Alert";

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
  const [success, setSuccess] = useState<boolean>(false);

  const { setNotes, notes } = useContext(NotesContext);

  useEffect(() => {
    let newDate: Date = new Date();
    let hours: number = newDate.getHours();
    let minutes: number = newDate.getMinutes();
    let date: number = newDate.getDate();
    let month: number = newDate.getMonth();
    let year: number = newDate.getFullYear();
    const actualTime: string = `${hours <= 9 ? 0 : ""}${hours}:${minutes <= 9 ? 0 : "" }${minutes}`;
    const actualDate: string = `${date <= 9 ? 0 : ""}${date}.${month <= 9 ? 0 : ""}${month}.${year}`;
    setTime(actualTime);
    setDate(actualDate);
  }, []);

  const handleAddNote = () => {
    const newNote: Note = {
      id: notes.length,
      text,
      time,
      date,
    };
    setNotes(notes.concat(newNote));
    setText("");
    setSuccess((prevState: boolean) => !prevState);
  };

  return (
    <div className="add-note-wrapper">
      <p>Wpisz tekst notatki</p>
      <textarea
        value={text}
        onChange={(e: ChangeEvent<any>) => setText(e.target.value)}
        placeholder="Tutaj wpisz treść notatki..."
      ></textarea>
      <button
        disabled={text.length === 0 ? true : false}
        style={{ cursor: text.length === 0 ? "default" : "pointer" }}
        onClick={() => handleAddNote()}
      >
        Dodaj
      </button>
      {success && <Alert type="success" closeFunc={setSuccess} />}
    </div>
  );
};

export default AddNote;

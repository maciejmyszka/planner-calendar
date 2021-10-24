import React, { useState, Dispatch, useContext, FC, useEffect } from "react";
import exit from "../images/close.svg";
import AddNote from "./AddNote";
import SingleNote from "./SingleNote";
import { NotesContext, defaultNotes } from "../context/notesContext";
import { DateContext } from "../context/dateContext";

interface Props {
  setShowNotes: Dispatch<boolean>;
}

interface Note {
  id: number;
  text: string;
  time: string;
  date: string;
}

const Notes: FC<Props> = ({ setShowNotes }: Props) => {
  const { width } = useContext(DateContext);
  const [notes, setNotes] = useState<Array<Note>>(defaultNotes.notes);
  const [actionType, setActionType] = useState<string>("show");

  useEffect(() => {
    const data = localStorage.getItem("notes")
    if (data) {
      setNotes(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  })

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      <div
        className={
          width >= 891 ? "notes-feature slide-in-right" : "notes-feature"
        }
      >
        <div className="top-wrapper">
          <h2>Notatki</h2>
          <img src={exit} alt="zamknij" onClick={() => setShowNotes(false)} />
        </div>
        <div className="actions">
          <p
            onClick={() => setActionType("show")}
            className={actionType === "show" ? "choosed" : ""}
          >
            Pokaż notatki
          </p>
          <p
            onClick={() => setActionType("add")}
            className={actionType === "add" ? "choosed" : ""}
          >
            Dodaj notatkę
          </p>
        </div>
        <div className="notes-content">
          {actionType === "add" && <AddNote />}
          {actionType === "show" &&
            notes.map((note: Note) => (
              <SingleNote
                key={note.id}
                id={note.id}
                text={note.text}
                time={note.time}
                date={note.date}
              />
            ))}
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;

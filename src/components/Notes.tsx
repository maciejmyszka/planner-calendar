import React, { useState } from "react";
import exit from "../images/close.svg";
import AddNote from "./AddNote";
import SingleNote from "./SingleNote";

const Notes = ({setShowNotes} : any) => {
  const [notes, setNotes] = useState([])
  const [actionType, setActionType] = useState("show")

  return (
    <div className="notes-feature">
      <div className="top-wrapper">
        <h2>Notatki</h2>
        <img src={exit} alt="zamknij" onClick={() => setShowNotes(false)}/>
      </div>
      <div className="actions">
        <p onClick={() => setActionType("show")} className={actionType === "show" ? "choosed" : ""}>Pokaż notatki</p>
        <p onClick={() => setActionType("add")} className={actionType === "add" ? "choosed" : ""}>Dodaj notatkę</p>
      </div>
      <div className="notes-content">
        {actionType === "add" && <AddNote setNotes={setNotes} />}
        {actionType === "show" && notes.map((note: any) => <SingleNote key={note.id} id={note.id} notes={notes} setNotes={setNotes} text={note.text} time={note.time} date={note.date} />)}
      </div>
    </div>
  )
}

export default Notes;
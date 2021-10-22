import React from "react";
import exit from "../images/exit333.png";

const SingleNote = ({text, time, date, id, setNotes, notes} : any) => {

  const onClickDelete = () => {
    const newNotes = notes.filter((note:any) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="single-note-wrapper">
      <div className="note-header">
        <p>Dodane {date} o {time}</p>
        <img src={exit} alt="delete" onClick={() => onClickDelete()}/>
      </div>
      <p className="text">{text}</p>
    </div>
  )
}

export default SingleNote;
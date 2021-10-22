import React, { useState, useEffect } from "react";

const AddNote = ({setNotes} : any) => {
  const [text, setText] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    const actualTime = `${hours <= 9 ? 0 : ""}${hours}:${minutes <= 9 ? 0 : ""}${minutes}`;
    const actualDate = `${date <= 9 ? 0 : ""}${date}.${month <= 9 ? 0 : ""}${month}.${year}`
    setTime(actualTime)
    setDate(actualDate)
  }, [])

  const onClickAddNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 1234),
      text,
      time,
      date
    }
    setNotes((notes: any) => notes.concat(newNote))
    setText("")
  }

  return (
    <div className="add-note-wrapper">
      <p>Wpisz tekst notatki</p>
      <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
      <button onClick={() => onClickAddNote()}>Dodaj</button>
    </div>
  )
}

export default AddNote;
import React, { useState } from "react";
import Alert from "./Alert";

const AddTask = ({setTasks} : any) => {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("00:00")
  const [priority, setPriority] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const addTask = (e:any) => {
    e.preventDefault()
    if (title.length > 0) {
      const newTask = {
        id: Math.floor(Math.random() * 1234),
        title,
        time,
        text,
        priority
      }
      setTasks((tasks: any) => tasks.concat(newTask))
      setText("")
      setTitle("")
      setPriority(false)
      setTime("00:00")
      setShowAlert(false)
    } else {
      setShowAlert(true)
    }
    
  }

  return (
    <div className="form-wrapper">
      <p>Wpisz tytuł zadania</p>
      <input type="text" value={title} onChange={(e:any) => setTitle(e.target.value)} placeholder="Dodaj tytuł" />
      <p>Ustaw godzinę zadania</p>
      <input type="time" value={time} onChange={(e:any) => setTime(e.target.value)}/>
      <p>Wpisz notatkę do zadania</p>
      <input type="text" value={text} onChange={(e:any) => setText(e.target.value)} placeholder="Dodaj notatkę"/>
      <label>
        Priorytet
        <input type="checkbox" checked={priority} onChange={(e:any) => setPriority(e.target.checked)} />
      </label>
      <button onClick={(e) => addTask(e)}>Dodaj zadanie do listy</button>
      {showAlert && <Alert setShowAlert={setShowAlert} />}
    </div>
  )
}

export default AddTask;
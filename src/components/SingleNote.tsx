import React, { useContext, FC } from "react";
import { NotesContext } from "../context/notesContext";
import exit from "../images/exit333.png";

interface Note {
  id: number;
  text: string;
  time: string;
  date: string;
}

interface Props {
  text: string;
  time: string;
  date: string;
  id: number;
}

const SingleNote: FC<Props> = ({ text, time, date, id }: Props) => {
  const { notes, setNotes } = useContext(NotesContext);

  const onClickDelete = () => {
    const newNotes = notes.filter((note: Note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="single-note-wrapper">
      <div className="note-header">
        <p>
          Dodane {date} o {time}
        </p>
        <img src={exit} alt="delete" onClick={() => onClickDelete()} />
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

export default SingleNote;

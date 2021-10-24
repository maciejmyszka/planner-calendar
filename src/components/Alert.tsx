import React, { Dispatch, FC } from "react";
import close from "../images/close#333.png";

interface Props {
  setShowAlert: Dispatch<boolean>;
}

const Alert: FC<Props> = ({ setShowAlert }: Props) => {
  return (
    <div className="alert-wrapper bounce-in-top">
      <div className="alert-header">
        <div className="alert-top">
          <h3>Niepowodzenie</h3>
          <p>Przed chwilą</p>
        </div>
        <img src={close} alt="zamknij" onClick={() => setShowAlert(false)} />
      </div>
      <div className="alert-content">
        <p>Musisz wpisać tytuł zadania!</p>
      </div>
    </div>
  );
};

export default Alert;

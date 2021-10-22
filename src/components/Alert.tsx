import React from "react";
import close from "../images/close.svg";

const Alert = ({ setShowAlert }: any) => {
  return (
    <div className="alert-wrapper">
      <div className="alert-header">
        <h3>Niepowodzenie</h3>
        <img src={close} alt="zamknij" onClick={() => setShowAlert(false)} />
      </div>
      <div className="alert-content">
        <p>Musisz wpisać tytuł zadania!</p>
      </div>
    </div>
  );
};

export default Alert;

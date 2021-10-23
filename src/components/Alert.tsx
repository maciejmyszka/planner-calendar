import React, { Dispatch, FC } from "react";
import close from "../images/close.svg";

interface Props {
  setShowAlert: Dispatch<boolean>;
}

const Alert: FC<Props> = ({ setShowAlert }: Props) => {
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

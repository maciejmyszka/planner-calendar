import React, { Dispatch, FC } from "react";
import close from "../images/close#333.png";

interface Props {
  closeFunc: Dispatch<boolean>;
  type: string;
}

const Alert: FC<Props> = ({ closeFunc, type }: Props) => {
  return type === "failed" ? (
    <div className="alert-wrapper bounce-in-top">
      <div className="alert-header">
        <div className="alert-top">
          <h3>Niepowodzenie</h3>
          <p>Przed chwilą</p>
        </div>
        <img src={close} alt="zamknij" onClick={() => closeFunc(false)} />
      </div>
      <div className="alert-content">
        <p>Musisz wpisać tytuł!</p>
      </div>
    </div>
  ) : (
    <div className="alert-wrapper slide-in-right">
      <div className="alert-header">
        <div className="alert-top">
          <h3>Sukces</h3>
          <p>Przed chwilą</p>
        </div>
        <img src={close} alt="zamknij" onClick={() => closeFunc(false)} />
      </div>
      <div className="alert-content">
        <p>Pomyślnie dodano notatkę!</p>
      </div>
    </div>
  );
};

export default Alert;

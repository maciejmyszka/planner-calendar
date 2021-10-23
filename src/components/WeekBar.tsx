import React, { useContext, FC } from "react";
import { DateContext } from "../context/dateContext";

const WeekBar: FC = () => {
  const { width } = useContext(DateContext)

  return (
    <div className="weekbar">
      <p>{width < 880 ? "Pon" : "Poniedziałek"}</p>
      <p>{width < 880 ? "Wt" : "Wtorek"}</p>
      <p>{width < 880 ? "Śr" : "Środa"}</p>
      <p>{width < 880 ? "Czw" : "Czwartek"}</p>
      <p>{width < 880 ? "Pt" : "Piątek"}</p>
      <p>{width < 880 ? "Sob" : "Sobota"}</p>
      <p>{width < 880 ? "Nd" : "Niedziela"}</p>
    </div>
  );
};

export default WeekBar;

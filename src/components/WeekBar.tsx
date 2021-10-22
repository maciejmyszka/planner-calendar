import React, { useState, useEffect } from "react";

const WeekBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

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

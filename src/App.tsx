import React, { useState, useEffect, FC } from "react";
import Notes from "./components/Notes";
import WeekBar from "./components/WeekBar";

import arrow from "./images/arrow.svg";

import { DateContext, defaultObject } from "./context/dateContext";
import SingleYear from "./components/SingleYear";

interface Date {
  date: number;
  month: number;
  year: number;
}

const App: FC = () => {
  const [date, setDate] = useState<Date>(defaultObject.date);
  const [width, setWidth] = useState<number>(defaultObject.width);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  const years: number = date.year + 10;
  let yearsArr:Array<number> = [];
  for (let i = date.year - 10; i <= years; i++) {
    yearsArr.push(i)
  }
  const properYear = yearsArr.filter((year:number) => year === date.year)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const setNameMonth = (monthNumber: number) => {
    switch (monthNumber) {
      case 1:
        return "Styczeń";
      case 2:
        return "Luty";
      case 3:
        return "Marzec";
      case 4:
        return "Kwiecień";
      case 5:
        return "Maj";
      case 6:
        return "Czerwiec";
      case 7:
        return "Lipiec";
      case 8:
        return "Sierpień";
      case 9:
        return "Wrzesień";
      case 10:
        return "Październik";
      case 11:
        return "Listopad";
      case 12:
        return "Grudzień";
    }
  };

  const nextMonth = () => {
    if (date.month === 12) {
      const newDate: Date = {
        ...date,
        month: 1,
        year: date.year + 1,
      };
      setDate(newDate);
    } else {
      const newDate: Date = {
        ...date,
        month: date.month + 1,
      };
      setDate(newDate);
    }
  };

  const prevMonth = () => {
    if (date.month === 1) {
      const newDate: Date = {
        ...date,
        month: 12,
        year: date.year - 1,
      };
      setDate(newDate);
    } else {
      const newDate: Date = {
        ...date,
        month: date.month - 1,
      };
      setDate(newDate);
    }
  };

  return (
    <DateContext.Provider
      value={{
        date,
        setDate,
        width,
        setWidth,
      }}
    >
      <div style={{ position: "relative" }}>
        <div className="notes-wrapper">
          {!showNotes && (
            <p
              className="shortcut"
              onClick={() => setShowNotes((prevState: boolean) => !prevState)}
            >
              Notatki
            </p>
          )}
          {showNotes && <Notes setShowNotes={setShowNotes} />}
        </div>
        <div
          className="main-wrapper"
          style={{
            filter: showNotes ? "blur(5px)" : "none",
            pointerEvents: showNotes ? "none" : "unset",
          }}
        >
          <div className="title">
            <h1>Kalendarz / Planner</h1>
            <div className="details">
              <img src={arrow} alt="previous" onClick={() => prevMonth()} />
              <p>
                {setNameMonth(date.month)} {width < 769 && "/ "}{" "}
                {width < 769 && setNameMonth(date.month + 1)} / {date.year}
              </p>
              <img src={arrow} alt="next" onClick={() => nextMonth()} />
            </div>
          </div>
          <WeekBar />
          {properYear.map((year: any) => <SingleYear key={year} year={year} />)}
        </div>
      </div>
    </DateContext.Provider>
  );
};

export default App;

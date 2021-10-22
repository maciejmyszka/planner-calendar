import React, { useState, useEffect } from 'react';
import Notes from './components/Notes';

import SingleMonth from './components/SingleMonth';
import WeekBar from './components/WeekBar';
import arrow from "./images/arrow.svg";

const App = () => {
  let newDate = new Date()
  let actualDate = newDate.getDate();
  let actualMonth = newDate.getMonth() + 1;
  let actualYear = newDate.getFullYear();

  const [date, setDate] = useState({
    date: actualDate,
    month: actualMonth,
    year: actualYear
  })

  const [showNotes, setShowNotes] = useState(false)

  const months = 12;
  let monthsArr: any = [];

  for (let i = 1; i <= months; i++) {
    monthsArr.push(i);
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const setNameMonth = (monthNumber: any) => {
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
        return "Grudzień"
    }
  }

  const nextMonth = () => {
    if (date.month === 12) {
      const newDate = {
        ...date,
        month: 1,
        year: date.year + 1
      }
      setDate(newDate)
    } else {
      const newDate = {
        ...date,
        month: date.month + 1
      }
      setDate(newDate)
    }
  }

  const prevMonth = () => {
    if (date.month === 1) {
      const newDate = {
        ...date,
        month: 12,
        year: date.year - 1
      }
      setDate(newDate)
    } else {
      const newDate = {
        ...date,
        month: date.month - 1
      }
      setDate(newDate)
    }
  }

  return (
    <div style={{ position: "relative" }} >
      <div className="notes-wrapper">
        {!showNotes && <p className="shortcut" onClick={() => setShowNotes(prevState => !prevState)}>Notatki</p>}
        {showNotes && <Notes setShowNotes={setShowNotes} />}
      </div>
      <div className="main-wrapper" style={{ filter: showNotes ? "blur(5px)" : "none", pointerEvents: showNotes ? "none" : "unset" }}>
        <div className="title">
          <h1>Kalendarz / Planner</h1>
          <div className="details">
            <img src={arrow} alt="previous" onClick={() => prevMonth()} />
            <p>{setNameMonth(date.month)} {width < 769 && "/ "} {width < 769 && setNameMonth(date.month + 1)} / {date.year}</p>
            <img src={arrow} alt="next" onClick={() => nextMonth()} />
          </div>
        </div>
        <WeekBar />
        {monthsArr.map((month: any) => <SingleMonth key={month} month={month} date={date} />)}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import SingleDay from "./SingleDay";

const SingleMonth = ({ month, date }: any) => {
  const [width, setWidth] = useState(window.innerWidth);

  const days = 30;
  const daysArr: any = [];

  for (let i = 1; i <= days; i++) {
    daysArr.push(i);
  }

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const mobileRule = width < 769 && date.month + 1 === month;

  return (
    <div
      style={{ display: date.month === month || mobileRule ? "flex" : "none" }}
      className="month-wrapper"
    >
      {daysArr.map((day: any) => (
        <SingleDay key={day} day={day} month={month} date={date} />
      ))}
    </div>
  );
};

export default SingleMonth;

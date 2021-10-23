import React, { useContext, FC } from "react";
import { DateContext } from "../context/dateContext";
import SingleDay from "./SingleDay";

interface Props {
  month: number;
}

const SingleMonth: FC<Props> = ({ month }: Props) => {
  const {date, width } = useContext(DateContext)

  const days: number = 30;
  const daysArr: Array<number> = [];
  for (let i = 1; i <= days; i++) {
    daysArr.push(i);
  }

  const mobileRule = width < 769 && date.month + 1 === month;

  return (
    <div
      style={{ display: date.month === month || mobileRule ? "flex" : "none" }}
      className="month-wrapper"
    >
      {daysArr.map((day: number) => (
        <SingleDay key={day} day={day} month={month} />
      ))}
    </div>
  );
};

export default SingleMonth;

import React from "react";
import SingleMonth from "./SingleMonth";

interface Props {
  year: number;
}

const SingleYear = ({ year }: Props) => {
  const months: number = 12;
  let monthsArr: Array<number> = [];
  for (let i = 1; i <= months; i++) {
    monthsArr.push(i);
  }

  return (
    <div>
      {monthsArr.map((month: number) => (
        <SingleMonth key={month} month={month} year={year} />
      ))}
    </div>
  );
};

export default SingleYear;

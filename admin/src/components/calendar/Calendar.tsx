import React, { useState, useEffect } from "react";

//
import CardOne from "../card/Card";
import { dataFakeCalendar } from "../../data/dataCalendar";

//Calendar
const Calendar = () => {
  const [date, setDate] = useState<any[]>([]);
  useEffect(() => {
    setDate(dataFakeCalendar);
  }, []);
  // handleCalendar
  const handleCalendar = () => {};

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="calendar calendar__sm calendar__md calendar__lg">
        {date.map((d, index) => (
          <CardOne key={index} day={d.day} month={d.month} year={d.year} active={d.active} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;

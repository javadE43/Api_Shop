import React, { useState, useEffect } from "react";

//
import CardOne from "../card/Card";
import { useGetCalendarQuery } from "../../features/calendar/apiCalendar";


//Calendar
const Calendar: React.FC = () => {
  const { isLoading, data } = useGetCalendarQuery({});
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="calendar calendar__sm calendar__md calendar__lg">
        {data?.data && data.data.weeke.map((d:{weekeDayName:string,weekeDayNumber:string}) => (
          <CardOne key={d.weekeDayNumber} day={d} month={data?.data?.date.month} year={data?.data?.date.year} active={data?.data?.date.weekday} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;

import React from "react";
import {Month,Weekeday,Year } from "../../features/calendar/apiCalendar";

interface CardProps{
    day:{weekeDayName:string,weekeDayNumber:string}
    month:Month
    year:Year
    active:Weekeday
}

const CardOne:React.FC<CardProps>=({day,month,year,active})=>{
  console.log(active.number.fa+"="+day.weekeDayNumber)
  console.log(active.number.fa==day.weekeDayNumber)
return(
    <div className={`wraper__card__one ${active.number.fa===day.weekeDayNumber?"bg-primary dark:border-graydark":"bg-white dark:bg-boxdark dark:border-boxdark dark:text-white"}`}>
       <div className={`parent__card__one ${active.number.fa===day.weekeDayNumber?"text-white":"text-black dark:text-white"}`}>
          {day.weekeDayName}
          <div className="flex flex-col ">
            <span>{month.name}</span>
            <span>{year.number.fa}</span>
          </div>
       </div>
    </div>
)
}

export default CardOne;
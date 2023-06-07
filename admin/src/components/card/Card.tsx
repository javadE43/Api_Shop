import React from "react";


interface CardProps{
    day:number
    month:string
    year:number
    active:number
}

const CardOne:React.FC<CardProps>=({day,month,year,active})=>{
return(
    <div className={`wraper__card__one ${!!active?"bg-primary dark:border-graydark":"bg-white dark:bg-boxdark dark:border-boxdark dark:text-white"}`}>
       <div className={`parent__card__one ${!!active?"text-white":"text-black dark:text-white"}`}>
          {day}
          <div className="flex flex-col ">
            <span>{month}</span>
            <span>{year}</span>
          </div>
       </div>
    </div>
)
}

export default CardOne;
import { useState } from "react";
import { Link } from "react-router-dom";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//

function Table__order() {
  const [order, setOrder] = useState<
    {
      id: number;
      name: string;
      postTracking: number;
      date: string;
    }[]
  >([
    { id: 1234, name: "احمدی فرد جواد", postTracking: 1001, date: "1402/2/20" },
    { id: 1234, name: "حسین احمدی فرد", postTracking: 1002, date: "1402/2/20" },
    { id: 1234, name: "حامد احمدی احمدی", postTracking: 1003, date: "1402/2/20" },
  ]);
  const [postTracking, setPostTracking] = useState<{ [key: number]: {type:string,color:string}}>(
    { 1001:{
      type: "ثبت شده",
      color:"registered",
    },
  
     1002:{
      type: "پرداخت شده",
      color:"paid",
    }
  ,
     1003:{
      type: "آماده ارسال",
      color:"readToSend",
    }
  ,
     1004:{
      type: "ارسال شده",
      color:"posted",
    }
  }
  );
  const [headOrder, setHeadOrder] = useState(["آیدی", "نام", "ثبت شده", "تاریخ ثبت"]);
  return (
    <div className={`section__table__order__home section__table__order__home__sm`}>
      <div className={`table__order__home table__order__home__sm`}>
        <div className="container__head__table__order__home container__head__table__order__home__sm">
          <ul className="parent__head__table__order__home parent__head__table__order__home__sm">
            {headOrder.map((item, index) => (
              <li key={index} className="item__head__table__order__home item__head__table__order__home__sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`container__content__table__order__home container__content__table__order__home__sm`}>
          {order.map((item, i) => (
            <Link key={i} to={`/`} className={`parent__item__table__order__home parent__item__table__order__home__sm`}>
              <span className={`item__table__order__home item__table__order__home__sm `}>{item.id}</span>
              <span className={`item__table__order__home item__table__order__home__sm `}>{item.name}</span>
              <span className={`item__table__order__home item__table__order__home__sm  ${postTracking[item.postTracking].color}`}>
                {postTracking[item.postTracking].type}
              </span>
              <span className={`item__table__order__home item__table__order__home__sm`}>{item.date}</span>
            </Link>
          ))}
        </div>
      </div>
      <Pageination />
    </div>
  );
}

function Pageination() {
  const [page, setPage] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);
  const [size, setSize] = useState<number>(3);

  //handlsowitchPage
  const handlSwoitchPage = (p: number) => {};

  return (
    <div className="w-full flex justify-center items-center sm:items-start sm:justify-start ">
    <div className={`countainer__pageination__table__home countainer__pageination__table__home__sm countainer__pageination__table__home__lg countainer__pageination__table__home__xl`}>
      <ul className={`parent__pageination__table__home parent__pageination__table__home__sm parent__pageination__table__home__lg parent__pageination__table__home__xl`}>
        <li>
          <button><NavigateNextIcon/></button>
        </li>
        {page.slice(0, 3).map((item, index) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
        <li>
          <button><NavigateBeforeIcon/></button>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Table__order;

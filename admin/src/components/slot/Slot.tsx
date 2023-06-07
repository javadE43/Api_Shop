import React,{useState}from"react"
import * as cardSlot from "../../components/cardSlot/CardSlot";
import { dataOrderSlot } from "../../data/dataOrderSlot";


function Solt_Order() {
    const [dateCardSolt, setDataCardSolt] = useState(dataOrderSlot);
    return (
      <div className={`order__solt order__solt__sm`}>
        <cardSlot.CardSlotOne
          percent={dateCardSolt[0].percent}
          price={dateCardSolt[0].price}
          date={dateCardSolt[0].date}
          precentIcone={dateCardSolt[0].precentIcone}
        />
        <cardSlot.CardSlotTow
          percent={dateCardSolt[1].percent}
          price={dateCardSolt[1].price}
          date={dateCardSolt[1].date}
          precentIcone={dateCardSolt[1].precentIcone}
        />
        <cardSlot.CardSlotThree
          percent={dateCardSolt[2].percent}
          price={dateCardSolt[2].price}
          date={dateCardSolt[2].date}
          precentIcone={dateCardSolt[2].precentIcone}
        />
        <cardSlot.CardSlotFore
          percent={dateCardSolt[3].percent}
          price={dateCardSolt[3].price}
          date={dateCardSolt[3].date}
          precentIcone={dateCardSolt[3].precentIcone}
        />
      </div>
    );
  }
  export default Solt_Order;
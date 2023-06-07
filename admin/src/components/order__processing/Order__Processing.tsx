import React, { useEffect, useState } from "react";

//
import * as cardProcessing from "../../components/cardThree/CardThree";
import { orderProcessing } from "../../data/dataOrderProcessing";

function Order_processing() {
  const [dateCardprocessing, setDataCardProcessing] = useState(orderProcessing);
  return (
    <div className={`order__processing`}>
      <cardProcessing.CardProcessingOne
        date={dateCardprocessing[0].date}
        numberOf={dateCardprocessing[0].numberOf}
      />
      <cardProcessing.CardProcessingTow
        date={dateCardprocessing[1].date}
        numberOf={dateCardprocessing[1].numberOf}
      />
      <cardProcessing.CardProcessingThree
        date={dateCardprocessing[2].date}
        numberOf={dateCardprocessing[2].numberOf}
      />
      <cardProcessing.CardProcessingFore
        date={dateCardprocessing[3].date}
        numberOf={dateCardprocessing[3].numberOf}
      />
    </div>
  );
}
export default Order_processing;

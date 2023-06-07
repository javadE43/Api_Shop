import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { CategoryScale } from "chart.js";
//
import DefaultLayout from "../../layout/DefaultLayout";
import Solt_Order from "../../components/slot/Slot";
import Calendar from "../../components/calendar/Calendar";
import Order_processing from "../../components/order__processing/Order__Processing";
import Chart from "../../components/chart/Chart";
import Table__order from "../../components/table__order__home/Table__order__home";

//
//component
const HomePage = () => {
  return (
    <DefaultLayout>
      <div className={`home__section__main`}>
        <Calendar />
        <div>
          <div className={`home__section__1`}>
            <div className={`section__order__home`}>
              <Solt_Order />
            </div>
          </div>
          <div className="home__section__2">
            <Chart />
          </div>
          <div className={`section__order__home mt-4`}>
              <Order_processing />
            </div>
        </div>
        <div className={`home__section__3`}>
          <Table__order />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

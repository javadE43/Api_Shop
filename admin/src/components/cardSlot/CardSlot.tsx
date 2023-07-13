import React from "react";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { useGetDailyIncomeQuery,useGetSevenDaysIncomeQuery,useGetThirtyDaysIncomeQuery,useGetTotalRevenueQuery } from "../../features/slotCardHome/slot";
import { useCoustomeDate } from "../../hooks/useCoustomDate";
interface CardTowProps {
  price: number;
  date: string;
  percent: number;
  precentIcone: number;
}

export const CardSlotOne: React.FC<CardTowProps> = ({ price, date, percent, precentIcone }) => {
  const {data,isLoading}=useGetDailyIncomeQuery({status:"payment"})
  return (
    <div className="basis-[100%] sm:basis-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:basis-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <LocalAtmOutlinedIcon className="text-success" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.data?.[0]?.todayIncome} <span className="mr-2 text-xs sm:text-sm">تومان</span>
          </h4>
          <span className="text-xs sm:text-sm font-medium text-gray">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm sm:text-lg font-medium text-meta-5">
          {data?.data?.[0]?.percent}%
          {!!precentIcone ? (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="fill-meta-1"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
export const CardSlotTow: React.FC<CardTowProps> = ({ price, date, percent, precentIcone }) => {
  const {data,isLoading}=useGetSevenDaysIncomeQuery({start:-7,lastDate:-7,status:"payment"})

  return (
    <div className="basis-[100%] sm:basis-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:basis-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <LocalAtmOutlinedIcon className="text-success" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.data?.[0]?.todayIncome} <span className="mr-2 text-xs sm:text-sm">تومان</span>
          </h4>
          <span className="text-xs sm:text-sm font-medium text-gray">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm sm:text-lg font-medium text-meta-5">
          {data?.data?.[0]?.percent}%
          {!!precentIcone ? (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="fill-meta-1"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
export const CardSlotThree: React.FC<CardTowProps> = ({ price, date, percent, precentIcone }) => {
  const {data,isLoading}=useGetThirtyDaysIncomeQuery({start:-30,lastDate:-30,status:"payment"})

  return (
    <div className="basis-[100%] sm:basis-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:basis-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <LocalAtmOutlinedIcon className="text-success" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
          {data?.data?.[0]?.todayIncome}<span className="mr-2 text-xs sm:text-sm">تومان</span>
          </h4>
          <span className="text-xs sm:text-sm font-medium text-gray">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm sm:text-lg font-medium text-meta-5">
          {data?.data?.[0]?.percent}%
          {!!precentIcone ? (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="fill-meta-1"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
export const CardSlotFore: React.FC<CardTowProps> = ({ price, date, percent, precentIcone }) => {
  return (
    <div className="basis-[100%] sm:basis-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:basis-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <LocalAtmOutlinedIcon className="text-success" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {price} <span className="mr-2 text-xs sm:text-sm">تومان</span>
          </h4>
          <span className="text-xs font-medium text-gray sm:text-sm">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm sm:text-lg font-medium text-meta-5">
          {percent}%
          {!!precentIcone ? (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="fill-meta-1"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

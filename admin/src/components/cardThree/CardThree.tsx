import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
interface CardProcessingProps {
  numberOf: string;
  date: string;
}

export const CardProcessingOne: React.FC<CardProcessingProps> = ({ numberOf, date }) => {
  return (
    <div className="basis-[49%] mx-w-[49%] min-w-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark lg:basis-[24%] lg:mx-w-[24%] lg:min-w-[24%]">
      <div className="flex h-11 w-11 items-center justify-center  rounded-full bg-meta-2 dark:bg-meta-4">
        <LocalShippingOutlinedIcon className="text-success" />
      </div>

      <div className="mt-4 flex items-end justify-between overflow-hidden gap-x-2">
        <div>
          <span className="text-xs font-medium dark:text-white sm:text-lg">{date}</span>
        </div>
        <span className="flex items-center gap-1 text-sm font-medium text-meta-5 sm:text-lg">
          {numberOf}
        </span>
      </div>
    </div>
  );
};
export const CardProcessingTow: React.FC<CardProcessingProps> = ({ numberOf, date }) => {
  return (
    <div className="basis-[49%] mx-w-[49%] min-w-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark lg:basis-[24%] lg:mx-w-[24%] lg:min-w-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <PendingOutlinedIcon className="text-warning" />
      </div>

      <div className="mt-4 flex items-end justify-between overflow-hidden">
        <div>
          <span className="text-xs font-medium dark:text-white sm:text-lg">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5 sm:text-lg">
          {numberOf}
        </span>
      </div>
    </div>
  );
};
export const CardProcessingThree: React.FC<CardProcessingProps> = ({ numberOf, date }) => {
  return (
    <div className="basis-[49%] mx-w-[49%] min-w-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark lg:basis-[24%] lg:mx-w-[24%] lg:min-w-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <HourglassTopOutlinedIcon className="text-primary" />
      </div>

      <div className="mt-4 flex items-end justify-between overflow-hidden">
        <div>
          <span className="text-xs font-medium dark:text-white sm:text-lg">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5 sm:text-lg">
          {numberOf}
        </span>
      </div>
    </div>
  );
};
export const CardProcessingFore: React.FC<CardProcessingProps> = ({ numberOf, date }) => {
  return (
    <div className="basis-[49%] mx-w-[49%] min-w-[49%] rounded-sm border border-stroke bg-white py-6 px-8 shadow-default dark:border-strokedark dark:bg-boxdark lg:basis-[24%] lg:mx-w-[24%] lg:min-w-[24%]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <AddShoppingCartOutlinedIcon />
      </div>

      <div className="mt-4 flex items-end justify-between overflow-hidden">
        <div>
          <span className="text-xs font-medium dark:text-white sm:text-lg">{date}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5 sm:text-lg">
          {numberOf}
        </span>
      </div>
    </div>
  );
};

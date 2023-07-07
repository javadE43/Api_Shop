import { Request, Response } from "express";
import { response } from "../helper/customResponse.js";
import axios from "axios";

interface Full {
  iso: { fa: string; en: string };
  usual: { fa: string; en: string };
  unofficial: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
}
interface Other {
  gregorian: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
  ghamari: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
}
interface Year {
  name: string;
  animal: string;
  leapyear: string;
  agone: { days: { fa: string; en: string }; percent: { fa: string; en: string } };
  left: { days: { fa: string; en: string }; percent: { fa: string; en: string } };
  number: { fa: string; en: string };
}
interface Month {
    name: string;
    asterism: string;
    number: {
      fa: string;
      en: string;
    };
}
interface Day {
  name: string;
  events: {
    local: { text: string; holiday: boolean };
    holy: { text: string; holiday: boolean };
    global: null | any;
  };
  number: { fa: string; en: string };
}
interface Weekeday {
  name: string;
  champ: string;
  number: { fa: string; en: string };
}

interface Date {
  full: Full;
  other: Other;
  year: Year;
  month: Month;
  day: Day;
  weekday: Weekeday;
}
interface Time24 {
  full: { fa: string; en: string };
  hour: { fa: string; en: string };
  minute: { fa: string; en: string };
  second: { fa: string; en: string };
}
interface TimeZone {
  unix: any;
  timestamp: any;
  timezone: any;
  season: any;
  time12: any;
  time24: Time24;
  date: Date;
}

export const GetCalendar = async (req: Request, res: Response) => {
  let { data } = await axios.get<TimeZone>("https://api.keybit.ir/time/");
  console.log(req.baseUrl);
  const weeke = [
    { weekeDayName: "شنبه", weekeDayNumber: "0" },
    { weekeDayName: "یکشنبه", weekeDayNumber: "۱" },
    { weekeDayName: "دوشنبه", weekeDayNumber: "۲" },
    { weekeDayName: "سه شنبه", weekeDayNumber: "۳" },
    { weekeDayName: "چهار شنبه", weekeDayNumber: "۴" },
    { weekeDayName: "پنج شنبه", weekeDayNumber: "۵" },
    { weekeDayName: "جمعه", weekeDayNumber: "۶" },
  ];
  if (!data) {
    response({
      res,
      message: `filed Request`,
      code: 500,
    });
  }
  response({
    res,
    message: "calendar",
    code: 200,
    data: { ...data, weeke: weeke },
  });
};

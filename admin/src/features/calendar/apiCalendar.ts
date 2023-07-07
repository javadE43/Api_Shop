import { apiSlice } from "../../app/api/apiSlice";
//interface
interface Full {
  iso: { fa: string; en: string };
  usual: { fa: string; en: string };
  unofficial: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
}
interface Other {
  gregorian: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
  ghamari: { iso: { fa: string; en: string }; usual: { fa: string; en: string } };
}
export interface Year {
  name: string;
  animal: string;
  leapyear: string;
  agone: { days: { fa: string; en: string }; percent: { fa: string; en: string } };
  left: { days: { fa: string; en: string }; percent: { fa: string; en: string } };
  number: { fa: string; en: string };
}
export interface Month {
    name: string;
    asterism: string;
    number: {
      fa: string;
      en: string;
    };
}
export interface Day {
  name: string;
  events: {
    local: { text: string; holiday: boolean };
    holy: { text: string; holiday: boolean };
    global: null | any;
  };
  number: { fa: string; en: string };
}
export interface Weekeday {
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
interface Weeke{
  weekeDayName:string,weekeDayNumber:string
}
 interface TimeZone {
  unix: any;
  timestamp: any;
  timezone: any;
  season: any;
  time12: any;
  time24: Time24;
  date: Date;
  weeke:Weeke[]
}

interface Data{
  data:TimeZone
  message:string
}

const calendarslice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCalendar: builder.query<Data,any>({
      query: () => ({ url: "/calendar" }),
      providesTags: [{ type: "calendar", id: "calendar" }],
      
    }),
  }),
});

export const { useGetCalendarQuery } = calendarslice;

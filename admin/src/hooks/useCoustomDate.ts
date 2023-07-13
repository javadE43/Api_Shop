interface useCoustomeDateProps {
  TODAY_START?: number;
  month?: number;
  hour?: number;
}

export const useCoustomeDate = ({ TODAY_START, month, hour }: useCoustomeDateProps) => {
  //DATE
  const TODAY_START_DAY = new Date();

  if (TODAY_START || Number(TODAY_START)) {
    TODAY_START_DAY.setUTCDate(Number(TODAY_START));
  }
  if (month || Number(month)) {
    TODAY_START_DAY.setUTCMonth(Number(month));
  }
  if (hour || Number(hour)) {
    TODAY_START_DAY.setUTCHours(Number(hour));
  }

  return {
    iso: TODAY_START_DAY.toISOString(),
    year: TODAY_START_DAY.getUTCFullYear(),
    month: TODAY_START_DAY.getUTCMonth(),
    day: TODAY_START_DAY.getUTCDate(),
  };
};

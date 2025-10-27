import { differenceInSeconds, parse } from 'date-fns';
import { fromZonedTime } from 'date-fns-tz';

export const minutesToTime = (d: number | string): string => {
  const seconds = Number(d);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const hourLabel = h === 1 ? 'hour' : 'hours';
  const minuteLabel = m === 1 ? 'minute' : 'minutes';
  return `${h} ${hourLabel} ${m} ${minuteLabel}`;
};

export const diffBetweenNow = (date: string | Date): number => {
  const timeZone = 'America/New_York';
  try {
    const inputDate = typeof date === 'string' ? parse(date, 'yyyy-MM-dd HH:mm:ss', new Date()) : date;

    const utcDate = fromZonedTime(inputDate, timeZone);
    return differenceInSeconds(new Date(), utcDate);
  } catch {
    return 0;
  }
};

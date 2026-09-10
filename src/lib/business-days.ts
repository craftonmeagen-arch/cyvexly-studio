const STUDIO_TIME_ZONE = "America/New_York";

type DateParts = { year: number; month: number; day: number };

function calendarDate({ year, month, day }: DateParts): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

function parts(date: Date): DateParts {
  const values = new Intl.DateTimeFormat("en-US", {
    timeZone: STUDIO_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(values.find((part) => part.type === type)?.value);
  return { year: value("year"), month: value("month"), day: value("day") };
}

function nthWeekday(year: number, month: number, weekday: number, nth: number): Date {
  const first = calendarDate({ year, month, day: 1 });
  const day = 1 + ((7 + weekday - first.getUTCDay()) % 7) + (nth - 1) * 7;
  return calendarDate({ year, month, day });
}

function lastWeekday(year: number, month: number, weekday: number): Date {
  const last = new Date(Date.UTC(year, month, 0));
  last.setUTCDate(last.getUTCDate() - ((7 + last.getUTCDay() - weekday) % 7));
  return last;
}

function observed(date: Date): Date {
  const result = new Date(date);
  if (result.getUTCDay() === 6) result.setUTCDate(result.getUTCDate() - 1);
  if (result.getUTCDay() === 0) result.setUTCDate(result.getUTCDate() + 1);
  return result;
}

function holidayKeys(year: number): Set<string> {
  const dates = [
    observed(calendarDate({ year, month: 1, day: 1 })),
    nthWeekday(year, 1, 1, 3),
    nthWeekday(year, 2, 1, 3),
    lastWeekday(year, 5, 1),
    observed(calendarDate({ year, month: 6, day: 19 })),
    observed(calendarDate({ year, month: 7, day: 4 })),
    nthWeekday(year, 9, 1, 1),
    nthWeekday(year, 10, 1, 2),
    observed(calendarDate({ year, month: 11, day: 11 })),
    nthWeekday(year, 11, 4, 4),
    observed(calendarDate({ year, month: 12, day: 25 })),
  ];
  return new Set(dates.map((date) => date.toISOString().slice(0, 10)));
}

function isBusinessDay(date: Date): boolean {
  const weekday = date.getUTCDay();
  if (weekday === 0 || weekday === 6) return false;
  const key = date.toISOString().slice(0, 10);
  const year = date.getUTCFullYear();
  return !holidayKeys(year).has(key) && !holidayKeys(year + 1).has(key);
}

export function getNextBusinessDay(now = new Date()): { isoDate: string; label: string } {
  const current = calendarDate(parts(now));
  do {
    current.setUTCDate(current.getUTCDate() + 1);
  } while (!isBusinessDay(current));

  return {
    isoDate: current.toISOString().slice(0, 10),
    label: new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(current),
  };
}

export const consultationTimingConvention =
  "Monday–Friday, excluding observed U.S. federal holidays, in the studio’s America/New_York timezone";

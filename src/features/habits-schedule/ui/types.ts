import { DateTime } from "luxon";

interface Day {
  weekDay: number;
  day: number;
}

export interface Month {
  days: Day[];
  date: DateTime;
}
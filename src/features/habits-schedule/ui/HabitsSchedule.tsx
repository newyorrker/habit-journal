import { DateTime } from "luxon";
import { HabitsDays } from "./days/HabitsDays";
import { HabitsMarks } from "./marks/HabitsMarks";
import { useEffect, useRef, useState } from "react";
import { Month } from "./types";

interface Props {
  date: DateTime;
}

export const HabitsSchedule = ({date}: Props) => {

  const [ width, setWidth ] = useState(0);
  const el = useRef<HTMLDivElement>(null);

  const DAY_WIDTH = 32;

  const [monthList, setMonthList] = useState<Month[]>([]);


  const addNewDay = (month: Month | undefined, currentDay: DateTime) => {
    month?.days.push({ day: currentDay.day, weekDay: currentDay.weekday });
  }

  /**
   * set currentDay and return new day number
   */
  const addNewMonth = (months: Month[], monthDate?: DateTime) => {
    const newLastMonth = { date: monthDate?.plus({months: 1}) || date, days: [] };
    months.push(newLastMonth);

    return newLastMonth;
  }

  const hasSpace = (width: number, months: Month[]) => {
    return width > (getDaysLength(months) * DAY_WIDTH + DAY_WIDTH);
  }

  const isLastDay = (month: Month | undefined, day: DateTime) => {
    return (month?.date.daysInMonth ?? 0) === day.day;
  }

  const getDaysLength = (months: Month[]) => {
    return months.reduce((prev: number, curr: Month) => {
      return prev + curr.days.length;
    }, 0);
  }

  const resizeHandler = () => {
    setWidth(el.current?.clientWidth ?? 0);
  }

  useEffect(() => {
    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    const months: Month[] = [];

    let currentDay = date;
    let i = 0;

    while(i < 50 && hasSpace(width, months)) {

      let lastMonth: Month | undefined = months[months.length - 1];

      i++;


      if(!lastMonth) {
        lastMonth = addNewMonth(months);
      }
      else if(isLastDay(lastMonth, currentDay)) {
        addNewMonth(months);
      }

      addNewDay(lastMonth, currentDay);
      currentDay = currentDay.plus({ days: 1});
    }

    setMonthList(months);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [width, date]);

  return (
    <div className="habits-schedule" ref={el}>
      <HabitsDays months={monthList} />
      <HabitsMarks />
    </div>
  )
}
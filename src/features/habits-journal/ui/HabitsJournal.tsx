import { useState } from "react";
import { DateTime } from "luxon";



import "./styles.scss";
import { MonthControl } from "@shared/ui/local/month-control";
import { HabitsSchedule, HabitsList } from "@features";

export const HabitsJournal = () => {

  const [ currentDate, setCurrentDate ] = useState(DateTime.local().startOf("month"));

  const setDateHandler = (date: DateTime) => {
    setCurrentDate(date);
  }

  return (
    <div className="habits-journal">
      <div className="habits-journal__sidebar">
        <HabitsList header={<MonthControl setDate={setDateHandler} date={currentDate} />} />
      </div>

      <div className="habits-journal__content">
        <HabitsSchedule date={currentDate} />
      </div>
    </div>
  )
}
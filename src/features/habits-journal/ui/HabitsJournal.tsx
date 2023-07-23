import { useState } from "react";



import "./styles.scss";
import { MonthControl } from "@shared/ui/local/month-control";
import { HabitsSchedule, HabitsList } from "@features";

const daysStub: Record<string, any>[] = Array.from({ length: 33 }, (_, index) => ({ day: index.toString() }));





export const HabitsJournal = () => {

  const [ days, setDays ] = useState<Record<string, any>[]>(daysStub);

  return (
    <div className="habits-journal">
      <div className="habits-journal__sidebar">
        <HabitsList header={<MonthControl />} />
      </div>

      <div className="habits-journal__content">
        <HabitsSchedule days={days} />
      </div>
    </div>
  )
}
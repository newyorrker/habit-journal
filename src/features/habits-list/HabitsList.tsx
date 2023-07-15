import { useState } from "react";
import { HabitRow } from "./HabitRow";
import { HabitsListHeader } from "./header/HabitsListHeader";

import "./styles.scss";

const daysStub: Record<string, any>[] = Array.from({ length: 33 }, (_, index) => ({ day: index.toString() }));

export const HabitsList = () => {



  const [ days, setDays ] = useState<Record<string, any>[]>(daysStub);

  return (
    <div>

      <div className="habits-list">
        <HabitsListHeader days={days} />
        <div>
          <HabitRow />
          <HabitRow />
          <HabitRow />
          <HabitRow />
          <HabitRow />
        </div>
      </div>
    </div>
  )
}
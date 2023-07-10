import { HabitRow } from "./HabitRow";
import { HabitsListHeader } from "./header/HabitsListHeader";

import "./styles.scss";

export const HabitsList = () => {
  return (
    <div>

      <div className="habits-list">
        <HabitsListHeader />
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
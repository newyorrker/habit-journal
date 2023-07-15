import { MonthControl } from "@shared/ui/local/month-control";
import { HabitsDays } from "./HabitsDays";

import "./styles.scss";

export const HabitsListHeader = ({days}: {days: Record<string, any>[]}) => {
  return (

    <div className="habits-list-header">
      <div className="habits-list-header__month">
        <MonthControl />
      </div>
      <HabitsDays days={days} />
    </div>
  )
}
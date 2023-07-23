import { Day } from "@shared/ui/local/day";

import "./styles.scss";

const dayTitles = [
  "Mon",
  "Tue",
  "Wed",
  "Tue",
  "Fri",
  "Sat",
  "Sun"
]

export const HabitsDays = ({days}: {days: Record<string, any>[]}) => {

  return (
    <div className="habits-days">
      {days.map(day => {
        return (
          <Day day={dayTitles[day.day%7]} key={day.day} />
        )
      })}
    </div>
  )
}
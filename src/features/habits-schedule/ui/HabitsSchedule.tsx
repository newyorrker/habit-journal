import { HabitsDays } from "./days/HabitsDays";
import { HabitsMarks } from "./marks/HabitsMarks";


export const HabitsSchedule = ({days}: {days: Record<string, any>[]}) => {
  return (
    <div className="habits-schedule">
      <HabitsDays days={days} />
      <HabitsMarks />
    </div>
  )
}
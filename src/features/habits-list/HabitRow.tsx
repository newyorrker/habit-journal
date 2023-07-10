import { HabitName } from "./name/HabitName";
import { CheckSequence } from "@shared/ui/local/check";

export const HabitRow = () => {
  return (
    <div className="habit-row">
      <div className="habit-row__name">
        <HabitName />
      </div>
      <div className="habit-row__items">
        <CheckSequence />
      </div>
    </div>
  )
}
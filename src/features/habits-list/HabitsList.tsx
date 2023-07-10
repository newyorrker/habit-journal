import { HabitRow } from "./HabitRow";

import "./styles.scss";

export const HabitsList = () => {
  return (
    <div className="habits-list">
      <HabitRow />
      <HabitRow />
      <HabitRow />
      <HabitRow />
      <HabitRow />
    </div>
  )
}
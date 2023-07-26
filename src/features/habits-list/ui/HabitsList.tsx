import { ReactNode } from "react";
import { HabitListItem } from "./item/HabitListItem";
import "./styles.scss";

export const HabitsList = ({header}: { header: ReactNode}) => {
  return (
    <div className="journal-sidebar">

      {header}

      <div className="habits-rows">
        <HabitListItem />
      </div>
    </div>
  )
}
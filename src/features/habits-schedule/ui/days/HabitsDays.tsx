import { Day } from "@shared/ui/local/day";
import { Month } from "../types";
import "./styles.scss";

const dayTitles = [
  "Mon",
  "Tue",
  "Wed",
  "Tue",
  "Fri",
  "Sat",
  "Sun"
];

interface Props {
  months: Month[];
}

export const HabitsDays = ({months}: Props) => {
  return (
    <div className="habits-days">
      {months.map((month) => {
        return month.map((day, index) => <Day day={dayTitles[day.weekDay - 1]} number={day.day} key={index} />)
      })}
    </div>
  )
}
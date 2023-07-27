import { CheckSequence } from "@shared/ui/local/check";
import { Day, Month } from "../types";
import { useEffect, useState } from "react";
import { MarkView } from "@shared/ui/local/check/types";

interface Props {
  months: Month[];
  habits: Record<"id", string>[];
}

const HabitMarks = ({ days }: {days: Day[]}) => {

  const [marks, setMarks] = useState<MarkView[]>([]);

  useEffect(() => {
    setMarks(days.map(() => ({})));
  }, [days]);

  return (
    <CheckSequence items={marks} setItems={setMarks}/>
  )
}

export const HabitsMarks = ({ months, habits }: Props) => {
  const days = months.flat();

  return (
    <div className="habits-marks">
      {
        habits.map((_, index) => {
          return (
            <HabitMarks days={days} key={index} />
          )
        })
      }
    </div>
  )
}
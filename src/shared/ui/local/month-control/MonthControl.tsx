import { Button } from "@shared/ui/shadcn";
import { Icons } from "@shared/ui/local/icons/Icons";

import "./styles.scss";
import { DateTime } from "luxon";

interface Props {
  setDate: (date: DateTime) => void;
  date: DateTime;
}

export const MonthControl = ({setDate, date}: Props) => {

  const dateChangeHandler = (direction: number) => {
    setDate(date.set({ month: direction > 0 ? date.month + 1 : date.month - 1 }));
  }

  return (
    <div className="month-control">
      <div className="text-lg font-semibold">
        <span>{ date.toFormat("MMMM, y") }</span>
      </div>

      <div className="month-control__actions">
        <Button onClick={() => dateChangeHandler(-1)} variant={"outline"} size={"icon"}>
          <Icons.ChevronLeft />
        </Button>
        <Button onClick={() => dateChangeHandler(1)} variant={"outline"} size={"icon"}>
          <Icons.ChevronRight />
        </Button>
      </div>
    </div>
  );
};

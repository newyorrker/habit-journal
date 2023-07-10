import { Button } from "@shared/ui/shadcn";
import { Icons } from "@shared/ui/local/icons/Icons";

import "./styles.scss";

export const MonthControl = () => {
  return (
    <div className="month-control">
      <div className="text-lg font-semibold">
        <span>April, 2023</span>
      </div>

      <div className="month-control__actions">
        <Button variant={"outline"} size={"icon"}>
          <Icons.ChevronLeft />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Icons.ChevronRight />
        </Button>
      </div>
    </div>
  );
};

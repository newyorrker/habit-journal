import { DateTime } from "luxon";

export enum MarkPosition {
  left = "left",
  right = "right",
  center = "center",
  single = "single",
}

export enum MarkState {
  done = "done",
  planned = "planned"
}

export interface CheckItemBase {
  id?: string;
  state?: "checked" | "subChecked";
}

export interface MarkView {
  id?: string;
  position?: MarkPosition;
  state?: MarkState;
  date?: DateTime;

}

export interface CheckItemView extends CheckItemBase {
  position: MarkPosition;
}

export interface CheckItemRaw extends CheckItemBase {
  position?: MarkPosition;
}

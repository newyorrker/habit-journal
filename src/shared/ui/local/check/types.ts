export enum Position {
  left = "left",
  right = "right",
  center = "center",
  single = "single",
}

export interface CheckItemBase {
  id: string;
  state?: "checked" | "subChecked";
}

export interface CheckItemView extends CheckItemBase {
  position: Position;
}

export interface CheckItemRaw extends CheckItemBase {
  position?: Position;
}

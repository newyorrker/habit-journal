import "./style.scss";
import { CheckItemRaw, CheckItemView, Position } from "./types";

const color = "#475569";

export interface CheckItemProps {
  item: CheckItemRaw;
  onCLick?: (id: string) => void;
}

const dict = {
  checked: {
    left: <path fill={color} d="M16 0C9.373 0 4 5.373 4 12s5.373 12 12 12c2.727 0 5.271-.88 7.407-2.558C25.625 19.81 27.606 18 32 18V6c-4.394 0-6.375-1.81-8.593-3.442A11.839 11.839 0 0 0 16 0Z" />,
    right: <path fill={color} d="M16 24c6.627 0 12-5.373 12-12S22.627 0 16 0c-2.727 0-5.271.88-7.407 2.558C6.375 4.19 4.394 6 0 6v12c4.394 0 6.375 1.81 8.593 3.442A11.839 11.839 0 0 0 16 24Z" />,
    center: <path fill={color} d="M32 6c-4 0-6-1.5-8-3s-4-3-8-3-6 1.5-8 3-4 3-8 3v12c4 0 6 1.5 8 3s4 3 8 3 6-1.5 8-3 4-3 8-3V6Z" />,
    single: <circle cx="16" cy="12" r="12" fill={color} />,
  },
  subChecked: {
    left: <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M4 12C4 5.373 9.373 0 16 0c2.727 0 5.27.88 7.407 2.558.199.146.396.294.593.442 2 1.5 4 3 8 3v12c-4 0-6 1.5-8 3-.197.148-.394.296-.593.442A11.84 11.84 0 0 1 16 24C9.373 24 4 18.627 4 12Zm12 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />,
    right: <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M28 12c0 6.627-5.373 12-12 12-2.727 0-5.27-.88-7.407-2.558-.199-.146-.396-.294-.593-.442-2-1.5-4-3-8-3V6c4 0 6-1.5 8-3 .197-.148.394-.296.593-.442A11.84 11.84 0 0 1 16 0c6.627 0 12 5.373 12 12ZM16 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" />,
    center: <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M24 3c2 1.5 4 3 8 3v12c-4 0-6 1.5-8 3s-4 3-8 3-6-1.5-8-3-4-3-8-3V6c4 0 6-1.5 8-3s4-3 8-3 6 1.5 8 3Zm-8 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" />,
    single: <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M16 24c6.627 0 12-5.373 12-12S22.627 0 16 0 4 5.373 4 12s5.373 12 12 12Zm0-19a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" />,
  },
  empty: <circle cx="16" cy="12" r="11.5" stroke={color} />,
};

const getViewItem = (rawItem: CheckItemRaw): CheckItemView => {
  return {
    ...rawItem,
    position: rawItem.position ?? Position.single,
  };
};

export const CheckItem = ({ item, onCLick }: CheckItemProps) => {
  let child;

  const { state, position, id } = getViewItem(item);

  if (state === "checked") {
    child = dict.checked[position];
  } else if (state === "subChecked") {
    child = dict.subChecked[position];
  } else {
    child = dict.empty;
  }

  return (
    <button onClick={() => onCLick?.(id)} className="check-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="none">
        {child}
      </svg>
    </button>
  );
};

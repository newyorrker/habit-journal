import { useState } from "react";
import { CheckItemBase, Position, CheckItemView, CheckItemRaw } from "./types";
import { CheckItem } from "./CheckItem";

import { v4 as uuidv4 } from "uuid";

const getState = (item: Partial<CheckItemBase>) => {
  return item.state === "checked" ? undefined : item.state === "subChecked" ? "checked" : "subChecked";
};

const getPositionForLeft = (hasState: boolean, currentPosition: Position): Position => {
  if (hasState) {
    switch (currentPosition) {
      case Position.right:
        return Position.center;

      case Position.single:
        return Position.left;
    }
  } else {
    switch (currentPosition) {
      case Position.left:
        return Position.single;

      case Position.center:
        return Position.right;
    }
  }

  return currentPosition;
};

const getPositionForRight = (hasState: boolean, currentPosition: Position): Position => {
  if (hasState) {
    switch (currentPosition) {
      case Position.left:
        return Position.center;

      case Position.single:
        return Position.right;
    }
  } else {
    switch (currentPosition) {
      case Position.right:
        return Position.single;

      case Position.center:
        return Position.left;
    }
  }

  return currentPosition;
};

export const updateItems = (id: string, prevArray: CheckItemRaw[]) => {
  let targetIndex = 0;

  const arr = prevArray.map((item, index): CheckItemView => {
    const newItem: CheckItemView = { ...item, position: item.position ?? Position.single };

    if (newItem.id === id) {
      targetIndex = index;
      return { ...newItem, state: getState(item) };
    }

    return newItem;
  });

  const isFirstItem = targetIndex === 0;
  const isLastItem = targetIndex === arr.length - 1;

  const targetItem = arr[targetIndex];

  if (!targetItem.state) {
    targetItem.position = Position.single;
  }

  const leftItem = arr[targetIndex - 1];
  const rightItem = arr[targetIndex + 1];

  if (leftItem?.position) {
    leftItem.position = getPositionForLeft(!!targetItem.state, leftItem.position);
  }

  if (rightItem?.position) {
    rightItem.position = getPositionForRight(!!targetItem.state, rightItem.position);
  }

  if (targetItem.state) {
    if (isFirstItem && rightItem.state) {
      targetItem.position = Position.left;
    }

    if (isLastItem && leftItem.state) {
      targetItem.position = Position.right;
    }

    if (!isFirstItem && !isLastItem) {
      if (leftItem.state) {
        targetItem.position = Position.right;
      }

      if (rightItem.state) {
        targetItem.position = Position.left;
      }

      if (leftItem.state && rightItem.state) {
        targetItem.position = Position.center;
      }
    }
  }

  return arr;
};

export const CheckSequence = () => {
  const itemsList: CheckItemRaw[] = [
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },

    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },

    { id: uuidv4() },
    { id: uuidv4() },
];

  const [items, setItems] = useState<CheckItemRaw[]>(itemsList);

  const updateArray = (id: string) => {
    setItems((prevArray) => updateItems(id, prevArray));
  };

  return (
    <div className="check-sequence">
      {items.map((item) => {
        return (
          <div className="check-sequence__item" key={item.id}>
            <CheckItem onCLick={updateArray} item={item} />
          </div>
        );
      })}
    </div>
  );
};

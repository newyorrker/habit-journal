import { MarkPosition, MarkView, MarkState } from "./types";
import { CheckItem } from "./CheckItem";

const getState = (item: Partial<MarkView>) => {
  return item.state === MarkState.done ? undefined : item.state === MarkState.planned ? MarkState.done : MarkState.planned;
};

const getPositionForLeft = (hasState: boolean, currentPosition: MarkPosition): MarkPosition => {
  if (hasState) {
    switch (currentPosition) {
      case MarkPosition.right:
        return MarkPosition.center;

      case MarkPosition.single:
        return MarkPosition.left;
    }
  } else {
    switch (currentPosition) {
      case MarkPosition.left:
        return MarkPosition.single;

      case MarkPosition.center:
        return MarkPosition.right;
    }
  }

  return currentPosition;
};

const getPositionForRight = (hasState: boolean, currentPosition: MarkPosition): MarkPosition => {
  if (hasState) {
    switch (currentPosition) {
      case MarkPosition.left:
        return MarkPosition.center;

      case MarkPosition.single:
        return MarkPosition.right;
    }
  } else {
    switch (currentPosition) {
      case MarkPosition.right:
        return MarkPosition.single;

      case MarkPosition.center:
        return MarkPosition.left;
    }
  }

  return currentPosition;
};

export const updateItems = (targetIndex: number, prevArray: MarkView[]) => {
  if(!prevArray.length) {
    return [];
  }

  const arr = prevArray.map((item, index): MarkView => {
    const newItem: MarkView = { ...item, position: item.position ?? MarkPosition.single };

    if (targetIndex === index) {
      targetIndex = index;
      const state = getState(item);
      return { ...newItem, state };
    }

    return newItem;
  });

  const isFirstItem = targetIndex === 0;
  const isLastItem = targetIndex === arr.length - 1;

  const targetItem = arr[targetIndex];

  if (!targetItem?.state) {
    targetItem.position = MarkPosition.single;
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
      targetItem.position = MarkPosition.left;
    }

    if (isLastItem && leftItem.state) {
      targetItem.position = MarkPosition.right;
    }

    if (!isFirstItem && !isLastItem) {
      if (leftItem.state) {
        targetItem.position = MarkPosition.right;
      }

      if (rightItem.state) {
        targetItem.position = MarkPosition.left;
      }

      if (leftItem.state && rightItem.state) {
        targetItem.position = MarkPosition.center;
      }
    }
  }
  return arr;
};

interface Props {
  items: MarkView[];
  setItems: (cb: (prevArray: MarkView[]) => MarkView[]) => void;
}

export const CheckSequence = ({ items, setItems }: Props) => {

  const updateArray = (index: number) => {
    setItems((prevArray) => updateItems(index, prevArray));
  };

  return (
    <div className="mark-sequence">
      {items.map((item, index) => {
        return (
          <div className="mark-sequence__item" key={index}>
            <CheckItem onCLick={() => updateArray(index)} item={item} />
          </div>
        );
      })}
    </div>
  );
};

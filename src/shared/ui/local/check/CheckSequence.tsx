import { useState } from "react";
import { CheckItem, CheckItemProps } from "./CheckItem";

export const CheckSequence = () => {
  const ffre: CheckItemProps[] = [{}, {}, {}];

  const [items, setItems] = useState(ffre);

  const handleClick = (index: number) => {
    return () => {
      const newItems: CheckItemProps[] = items.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            state: item.state === "checked" ? undefined : item.state === "subChecked" ? "checked" : "subChecked",
          };
        }
        return item;
      });

      setItems(newItems);
    };
  };

  return (
    <div className="check-sequence">
      {items.map((item, index) => {
        return (
          <div className="check-sequence__item">
            <CheckItem onCLick={handleClick(index)} state={item.state} side={item.side} key={index} />
          </div>
        );
      })}
    </div>
  );
};

import { useState } from "react";
import { CheckItem, CheckItemProps, CheckItemInterface } from "./CheckItem";

import { v4 as uuidv4 } from "uuid";

export const CheckSequence = () => {
  const ffre: CheckItemInterface[] = [{ id: uuidv4() }, { id: uuidv4() }, { id: uuidv4() }];

  const [items, setItems] = useState(ffre);

  const handleClick = (id: string) => {
    const newItems: CheckItemInterface[] = items.map((item, i) => {
      if (id === item.id) {
        return {
          ...item,
          state: item.state === "checked" ? undefined : item.state === "subChecked" ? "checked" : "subChecked",
        };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <div className="check-sequence">
      {items.map((item) => {
        return (
          <div className="check-sequence__item" key={item.id}>
            <CheckItem onCLick={handleClick} item={item} />
          </div>
        );
      })}
    </div>
  );
};

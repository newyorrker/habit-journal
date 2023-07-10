import { useRef, useState } from "react";
import { Input } from "@shared/ui/shadcn";

import "./styles.scss"

export const HabitName = () => {
  const [isOnRead, setIsOnRead] = useState<boolean>(true);
  const [ title, setTitle ] = useState("Untitled");

  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {

    setIsOnRead(false);

    setTimeout(() => {

      inputRef.current?.focus();

    }, 0);
  }

  const blurHandler = () => {
    setIsOnRead(true);

    if(!title) {
      setTitle("Untitled");
    }
  }

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="habit-name">

      {
        (false || isOnRead )&& <div onClick={clickHandler} className="habit-name__title">{title}</div>
      }
      {
        (false || !isOnRead) && <Input ref={inputRef} onChange={onChangeHandler} onBlur={blurHandler} value={title} />
      }
    </div>
  );
};

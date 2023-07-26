import "./styles.scss";

export const Day = ({ day, number }: {day: string; number: number}) => {
  return (
    <div className="day">
      <div className="day__number">
        <span>{number}</span>
      </div>

      <div className="day__title">
        <span>{day}</span>
      </div>
    </div>
  );
};

import "./styles.scss";

export const Day = ({ day }: {day: string}) => {
  return (
    <div className="day">
      <div className="day__number">
        <span>12</span>
      </div>

      <div className="day__title">
        <span>{day}</span>
      </div>
    </div>
  );
};

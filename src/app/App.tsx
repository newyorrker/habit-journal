import "./styles/app.css";

import { Day } from "@shared/ui/local/day";
import { MonthControl } from "@shared/ui/local/month-control";

import { HabitsList } from "@features";

function App() {
  return (
    <>
      <MonthControl />
      <Day />

      <HabitsList />
    </>
  );
}

export default App;

import "./styles/app.css";

import { Day } from "@shared/ui/local/day";

import { HabitsList } from "@features";

function App() {
  return (
    <>
      <Day />

      <HabitsList />
    </>
  );
}

export default App;

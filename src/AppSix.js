import { useMemo, useState } from "react";
import { HookCounterThree } from "./HookCounterThree";
import { useCounterTwo } from "./UseCounterTwo";
import { WelcomeFunctionTwo } from "./WelcomeFunctionTwo";
import { LanguageContext } from "./LanguageContext";
import { ClockTwo } from "./ClockTwo";

function computeExpensiveValue() {
  for (let i = 0; i < 10e8; i++);
  return 42;
}

export function AppSix() {
  const result = useMemo(() => computeExpensiveValue(), []);
  const { counter, onIncrement } = useCounterTwo();
  const [language, setLanguage] = useState("it");

  function handleChangeLinguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLinguage}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
      <LanguageContext.Provider value={language}>
        <hr />
        <ClockTwo />
        <hr />
        <h3>Expensive value is: {result}</h3>
        <button onClick={onIncrement}>{counter}</button>
        <hr />
        <HookCounterThree initialValue={42} />
        <hr />
        <WelcomeFunctionTwo />
      </LanguageContext.Provider>
    </div>
  );
}

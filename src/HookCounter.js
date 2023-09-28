import { useEffect, useState } from "react";

export function HookCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("I have mounted");

    return () => {
      console.log("I am about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("The couter is now", { counter });

    return () => {
      console.log("The counter was", { counter });
    };
  }, [counter]);

  useEffect(() => {
    console.log("I have rendered");
  });

  function handleCounterIncrement() {
    // Ogni volta che il valore successivo della tua variabile di stato
    // dipende dal valore corrente della tua variabile di stato,
    //si passa una callback alla funzione setter
    setCounter((c) => c + 1);
  }

  function handleCounterReset() {
    // A differenza della function handleCounterIncrement,
    //Gli passiamo un valore diretto, perchè il valore successivo non dipende dal valore corrente
    setCounter(initialValue);
  }

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

import { useCounter } from "./UseCounter";

export function HookCounterTwo({ initialValue = 0 }) {
  const { counter, onIncrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

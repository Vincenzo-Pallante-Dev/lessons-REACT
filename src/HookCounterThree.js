import { useCounterTwo } from "./UseCounterTwo";

export function HookCounterThree({ initialValue = 0 }) {
  const { counter, onIncrement, onReset } = useCounterTwo(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

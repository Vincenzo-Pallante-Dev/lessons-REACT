import { useCallback, useState } from "react";

export function useCounterTwo(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  //   function handleCounterDecrement() {
  //     setCounter((c) => c - 1);
  //   }

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    // onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

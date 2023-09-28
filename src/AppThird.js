import { useState } from "react";
import { HookCounter } from "./HookCounter";

export function AppThird() {
  const [showCounter, setShowCounter] = useState(true);

  function handleToggleCounter() {
    setShowCounter((s) => !s);
  }

  return (
    <div>
      {showCounter && <HookCounter />}
      <button onClick={handleToggleCounter}>Toggle counter</button>
    </div>
  );
}

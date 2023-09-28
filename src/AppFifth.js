import React, { useState } from "react";
import { useCounter } from "./UseCounter";
import { GithubUser } from "./GithubUser";
import { HookCounterTwo } from "./HookCounterTwo";

export function AppFifth() {
  const { counter, onIncrement } = useCounter();
  const [username, setUsername] = useState("");
  return (
    <div>
      <button onClick={onIncrement}>{counter}</button>
      <hr />
      <HookCounterTwo />
      <hr />
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <GithubUser username={username} />
    </div>
  );
}

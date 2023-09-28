import React from "react";

export function WelcomeFunction({ name = "World" }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
}

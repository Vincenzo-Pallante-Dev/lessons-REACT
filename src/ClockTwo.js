import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translation = {
  it: {
    CURRENT_TIME: "L'ora attuale è",
  },
  en: {
    CURRENT_TIME: "Current time is",
  },
};

export function ClockTwo() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const _interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(_interval);
    };
  }, []);

  return (
    <p>
      {translation[language]["CURRENT_TIME"]} {date.toLocaleTimeString()}
    </p>
  );
}

import { useState } from "react";

export function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checbox" ? checked : value,
      };
    });
  }

  console.log(data);

  return (
    <form>
      <h1>Form</h1>
      <input
        onChange={handleInputChange}
        value={data.username}
        name="username"
      ></input>
      <input
        onChange={handleInputChange}
        value={data.password}
        type="password"
        name="password"
      ></input>
      <input
        onChange={handleInputChange}
        checked={data.remember}
        type="checkbox"
        name="remember"
      ></input>
    </form>
  );
}

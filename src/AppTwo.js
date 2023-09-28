import React from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";
import { WelcomeFunction } from "./WelcomeFunction";
import { HookCounter } from "./HookCounter";
import { LoginForm } from "./LoginForm";

export class AppTwo extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <Clock />
          <WelcomeFunction name="Jimmy" />
        </LanguageContext.Provider>
        <HookCounter initialValue={15} />
        <LoginForm />
      </div>
    );
  }
}

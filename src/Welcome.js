import React from "react";
import { HelloWorld } from "./HelloWorld";

export class Welcome extends React.Component {
  render() {
    const WelcomeStyle = {
      color: this.props.name ? "green" : "red",
      backgroundColor: "#333",
    };

    return (
      <div style={WelcomeStyle}>
        {/* {this.props.name ? (
          <h2>Hello, {this.props.name}</h2>
        ) : (
          <h2>Hello, World!</h2>
        )} */}
        {/* Al posto dell'operatore ternario possiamo utilizzare && */}
        {!!this.props.name && <h2>Hello, {this.props.name} </h2>}
        {!this.props.name && <HelloWorld renderGreeting />}
      </div>
    );
  }
}

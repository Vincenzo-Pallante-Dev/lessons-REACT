import React from "react";

export class MyForm extends React.Component {
  state = {
    username: "",
    password: "",
    remember: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    // console.log(value);
    // console.log(name);

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleResetState = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  handlePrefillForm = () => {
    //Avviene una chiamata ad un server, e alcuni dati vengono restituiti
    //E poi chiamiamo setState con i dati restituiti dal server
    //In una vera applicazione non prenderemo mai la password, perchè il server non avrà mai la tua password. In questo caso è un sesempio
    this.setState({
      username: "Jimmy",
      password: "hello123",
      remember: true,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>My Form</h1>
        <div>
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.handleResetState}>Reset</button>
          <button onClick={this.handlePrefillForm}>Prefill Form</button>
        </div>
      </div>
    );
  }
}

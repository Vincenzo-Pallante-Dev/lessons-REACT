import React, { createRef } from "react";

export class MyUncontrolledForm extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    // Siccome non abbiamo un attibuto di azione su questo modulo,
    // perchè non vogliamo inviare una richiesta HTTP e non vogliamo ricaricare la pagina
    //Quindi per impedire il comportamento predefinito del form HTML, utilizeremo il metodo preventDefault()
    event.preventDefault();

    //Adesso vogliamo accedere ai valori di tutti gli input,
    //in modo che possiamo inviare il nostro form
    //che nel nostro caso, sarà una semplice stampa sulla console del valore corrente
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  handleFormPrefill = () => {
    this._formRef.current.elements.username.value = "Billy";
    this._formRef.current.elements.password.value = "Hello123";
    this._formRef.current.elements.remember.checked = true;
  };

  render() {
    return (
      <div>
        <h3>My Uncontrolled Form</h3>

        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" defaultValue="Jimmy" />
          <input name="password" type="password" placeholder="Password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleFormPrefill}>
            Prefill Form
          </button>
        </form>
      </div>
    );
  }
}

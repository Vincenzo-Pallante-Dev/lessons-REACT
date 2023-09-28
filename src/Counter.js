import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  // constructor(props) {
  //   super(props);

  //   this._interval = setInterval(() => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + this.props.incrementBy,
  //       };
  //     });
  //   }, this.props.timeout);
  // }

  // componentWillUnmount() {
  //   if (this._interval) {
  //     clearInterval(this._interval);
  //   }
  // }

  // handleCounterIncrement = () => {
  //   this.setState((state) => {
  //     return {
  //       count: state.count + this.props.incrementBy,
  //     };
  //   });
  // };

  //Implemento handleCounterIncrement passandogli un event come parametro
  //ed, in console "console.log(event);", vedrò tutte le informazioni riguardati il tipo di evento(es. il pulsante con il quale è stato premuto)
  handleCounterIncrement = (event) => {
    console.log(event);
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };

  render() {
    return (
      <div>
        <h3
          style={{
            color: this.state.count < 5 ? "red" : "green",
          }}
        >
          Count: {this.state.count}
        </h3>
        {/* {this.state.count > 5 && <p>This counter is great!</p>} */}
        {/* {this.state.count < 5 && <p>This counter is great!</p>} */}
        <button onClick={this.handleCounterIncrement}>Increment</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  // timeout: 1000,
  initialValue: 0,
  incrementBy: 1,
};

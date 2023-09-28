import React from "react";

export function WithMousePosition(Component) {
  return class extends React.Component {
    state = {
      position: [0, 0],
    };

    handleMOuseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      this.setState({
        position: [x, y],
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMOuseMove}>
          <Component {...this.props} position={this.state.position} />
        </div>
      );
    }
  };
}

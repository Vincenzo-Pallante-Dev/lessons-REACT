import React from "react";

export class MouseTracker extends React.Component {
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
      <div
        onMouseMove={this.handleMOuseMove}
        style={{
          height: 300,
          width: 300,
          backgroundColor: "azure",
          marginTop: 20,
        }}
      >
        {this.props.children(this.state.position)}
      </div>
    );
  }
}

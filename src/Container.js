import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {/* //digito div.container-tile, poi con Ctrl+Shift+P, cerco Emmet: Expand
        Abbreviation */}
        <div className="container-title">{this.props.title}</div>
        <hr></hr>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

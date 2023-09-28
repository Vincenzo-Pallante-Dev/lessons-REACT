import React from "react";

export class MyList extends React.Component {
  render() {
    return (
      <div>
        <p>My List</p>
        <ul>
          {this.props.names.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

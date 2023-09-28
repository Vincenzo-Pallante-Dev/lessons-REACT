import React from "react";

export class MyTodos extends React.Component {
  render() {
    return (
      <div>
        <p>My Todos</p>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} {todo.completed && <span>(COMPLETED)</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

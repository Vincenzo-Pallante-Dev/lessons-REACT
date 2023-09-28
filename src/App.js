import React from "react";
// import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MyForm } from "./MyForm";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { MyList } from "./MyList";
import { MyTodos } from "./MyTodos";
import { Container } from "./Container";
import EnhancedMousePositionViewer from "./MousePositionViewer";
import { MouseTracker } from "./MouseTracker";

const todos = [
  { id: 1, title: "Buy Milk", completed: false },
  { id: 2, title: "Go to the movied", completed: false },
  { id: 3, title: "Water the plants", completed: true },
  { id: 4, title: "Sleep", completed: true },
];

export class App extends React.Component {
  render() {
    return (
      // Gli passo al posto del div, direttamente il Container component
      <Container title="My Awesome Application">
        {/* <h1>My Awesome Application</h1> */}
        {/* <HelloWorld renderGreeting={0} /> */}
        <Welcome name="Vincenzo" />
        <Counter />
        <Clock />
        <MyForm />
        <MyUncontrolledForm />
        <MyList names={["Vincenzo", "Billy", "Kate"]} />
        <MyTodos todos={todos} />
        <EnhancedMousePositionViewer />
        <MouseTracker>
          {(position) => {
            const [x, y] = position;
            return (
              <div>
                The current position is {x}, {y}
              </div>
            );
          }}
        </MouseTracker>
      </Container>
    );
  }
}

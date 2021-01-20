import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form.jsx";

class App extends Component {
  state = {
    contacts: [],
  };

  addTodo = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  render() {
    return <Form onSubmit={this.addTodo} />;
  }
}
export default App;

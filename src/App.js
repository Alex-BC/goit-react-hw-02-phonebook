import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
// import TodoList from "./components/TodoEditor/TodoList.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    // todos: initialTodos,
  };

  // addTodo = (text) => {
  //   const todo = {
  //     id: uuidv4(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState((prevState) => ({
  //     todos: [todo, ...prevState.todos],
  //   }));
  // };
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  // toggleCompleted = (todoId) => {
  //   console.log(todoId);
  // };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Form onSubmit={this.addContact} />
        {/* <TodoList />; */}
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}
export default App;

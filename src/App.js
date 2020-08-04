import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tickall from "./img/tickall.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Làm việc A", isComplete: true },
        { title: "Làm việc B", isComplete: false },
        { title: "Làm việc C", isComplete: false },
      ],
    };
  }

  onItemClick(item) {
    return (event) => {
      //   console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={tickall} width={28} />
          <input type="text" />
        </div>
        {this.state.todoItems.map((item, index) => (
          <TodoItem key={index} item={item} onClick={this.onItemClick(item)} />
        ))}
      </div>
    );
  }
}

export default App;

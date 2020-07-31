import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

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
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.todoItems.map((item, index) => (
          <TodoItem key={index} item={item} onClick={this.onItemClick(item)} />
        ))}
      </div>
    );
  }
}

export default App;

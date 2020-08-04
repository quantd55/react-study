import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import success from "../img/success.svg";
import tick from "../img/tick.svg";

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let img = tick;
    if (item.isComplete) {
      img = success;
    }
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <img onClick={onClick} src={img} width={32} />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;

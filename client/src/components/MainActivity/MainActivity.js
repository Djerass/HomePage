import React, { Component } from "react";

import styles from "./MainActivity.module.scss";
import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";

class MainActivity extends Component {
  state = {
    isDone: false,
    value: "",
    day: -1,
    month: -1,
    showActivity: true,
    inputLabel: "What it your main focus for today"
  };
  componentDidMount = () => {
    const previous = localStorage.getItem("mainActivity229");
    if (previous) {
      const previousObj = JSON.parse(previous);
      const newDay = new Date().getDay();
      const newMonth = new Date().getMonth();
      if (newMonth === previousObj.month && newDay === previousObj.day) {
        this.setState({
          isDone: previousObj.isDone,
          value: previousObj.value,
          day: previousObj.day,
          month: previousObj.month
        });
      } else {
        this.setState({
          showActivity: false
        });
      }
    } else {
      this.setState({
        showActivity: false
      });
    }
  };

  changeHandler = () => {
    this.setState(
      prevState => {
        return {
          isDone: !prevState.isDone
        };
      },
      () => {
        window.localStorage.setItem(
          "mainActivity229",
          JSON.stringify(this.state)
        );
      }
    );
  };

  inputHandler = e => {
    const value = e.target.value;
    this.setState({ value: value });
  };

  formSubmitHandler = e => {
    e.preventDefault();

    this.setState(
      () => {
        const newDay = new Date().getDay();
        const newMonth = new Date().getMonth();
        return {
          showActivity: true,
          day: newDay,
          month: newMonth
        };
      },
      () => {
        window.localStorage.setItem(
          "mainActivity229",
          JSON.stringify(this.state)
        );
      }
    );
  };

  deleteHandler = () => {
    // Clear Local storage
    localStorage.clear();
    this.setState({
      isDone: false,
      value: "",
      day: -1,
      month: -1,
      showActivity: false
    });
  };

  render = () => {
    let output;
    if (this.state.showActivity) {
      output = (
        <Todo
          isDone={this.state.isDone}
          value={this.state.value}
          changed={this.changeHandler}
          delete={this.deleteHandler}
          todoClass={styles.main_todo}
          id={this.state.value}
          checkboxClass={styles.checkbox}
        />
      );
    } else {
      output = (
        <TodoInput
          inputValue={this.state.value}
          changed={this.inputHandler}
          submited={this.formSubmitHandler}
          styles={styles.main_input}
          label={this.state.inputLabel}
        />
      );
    }
    return <div>{output}</div>;
  };
}

export default MainActivity;

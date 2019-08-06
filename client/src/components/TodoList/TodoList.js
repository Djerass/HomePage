import React, { Component } from "react";

import styles from "./TodoList.module.scss";
import TodoInput from "../TodoInput/TodoInput";
import TodoObj from "../../service/todoItem";
import Todo from "../Todo/Todo";

class TodoList extends Component {
  state = {
    isShown: false,
    placeholder: "Add todo",
    inputValue: "",
    todoList: []
  };
  componentDidMount = () => {
    const todoListFromStorage = localStorage.getItem("IncredibleTodoList");
    if (todoListFromStorage) {
      this.setState({
        todoList: JSON.parse(todoListFromStorage)
      });
    }
  };

  inputChangeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  formSubmitHandler = e => {
    e.preventDefault();
    if (this.state.inputValue) {
      const newTodo = new TodoObj(this.state.inputValue);
      this.setState(prevState => {
        return {
          inputValue: "",
          todoList: [...prevState.todoList, newTodo]
        };
      });
      localStorage.setItem(
        "IncredibleTodoList",
        JSON.stringify(this.state.todoList)
      );
    }
  };
  showClickHandler = () =>
    this.setState(prevState => {
      return {
        isShown: !prevState.isShown
      };
    });
  isDoneHandler = id => {
    const todos = this.state.todoList.slice();
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
      todos[index].isDone = !todos[index].isDone;
      this.setState({
        todoList: todos
      });
      localStorage.setItem(
        "IncredibleTodoList",
        JSON.stringify(this.state.todoList)
      );
    }
  };
  deleteHandler = id => {
    const todos = this.state.todoList.slice();
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
      this.setState({
        todoList: [...todos.slice(0, index), ...todos.slice(index + 1)]
      });
      localStorage.setItem(
        "IncredibleTodoList",
        JSON.stringify(this.state.todoList)
      );
    }
  };
  render() {
    const todos = this.state.todoList.map(todo => (
      <Todo
        key={todo.id}
        isDone={todo.isDone}
        value={todo.todo}
        todoClass={styles.todo_item}
        checkboxClass={styles.checkbox}
        changed={() => this.isDoneHandler(todo.id)}
        delete={() => this.deleteHandler(todo.id)}
        id={todo.id}
      />
    ));

    return (
      <div className={styles.todo_wrapper}>
        {this.state.isShown ? (
          <div className={styles.todo_list}>
            {todos}
            <TodoInput
              placeholder={this.state.placeholder}
              styles={styles.todo_form}
              inputValue={this.state.inputValue}
              changed={this.inputChangeHandler}
              submited={this.formSubmitHandler}
            />
          </div>
        ) : null}
        <div
          onClick={this.showClickHandler}
          className={styles.todo_show_button}
        >
          Todo
        </div>
      </div>
    );
  }
}

export default TodoList;

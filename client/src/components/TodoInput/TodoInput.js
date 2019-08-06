import React from "react";

const TodoInput = props => {
  return (
    <form className={props.styles} onSubmit={props.submited}>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.inputValue}
        placeholder={props.placeholder}
        onChange={props.changed}
      />
    </form>
  );
};

export default TodoInput;

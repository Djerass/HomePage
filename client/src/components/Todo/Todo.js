import React from "react";

const Todo = props => {
  const valueStyle = props.isDone ? { textDecoration: "line-through" } : null;
  return (
    <div className={props.todoClass}>
      <div className={props.checkboxClass}>
        <input
          name="isDone"
          type="checkbox"
          value={props.isDone}
          onChange={props.changed}
          checked={props.isDone}
          id={props.id}
        />
        <label htmlFor={props.id}></label>
      </div>
      <div className="todoValue" style={valueStyle}>
        {props.value}
      </div>
      <button onClick={props.delete}>
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
};

export default Todo;

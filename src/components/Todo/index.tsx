import React from "react";
import { TTodo } from "../../types";
import "./style.scss";

interface IProps extends TTodo {}

const Todo: React.FC<IProps> = ({ isComplete, text }) => {
  return (
    <div className="todo">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={isComplete}
        readOnly
      />
      <span className="todo__text">{text}</span>
    </div>
  );
};

interface IProps extends TTodo {}

export default Todo;

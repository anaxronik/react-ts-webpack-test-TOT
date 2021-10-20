import React from "react";
import { NavLink } from "react-router-dom";
import { TNote } from "../../types";
import Todo from "../Todo";
import "./style.scss";

interface IProps extends TNote {}

const Note: React.FC<IProps> = ({ title, todos, id }) => {
  return (
    <NavLink to={`/notes/${id}`} className="note">
      <div className="note__title">{title}</div>
      <div className="note__todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>
    </NavLink>
  );
};

export default Note;

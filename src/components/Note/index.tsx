import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routing";
import { TNote } from "../../types/note";
import Todo from "../Todo";
import "./style.scss";

interface IProps extends TNote {}

const Note: React.FC<IProps> = ({ title, todos, id }) => {
  return (
    <div className="note">
      <NavLink className="note__title" to={`${routes.notes}/${id}`}>
        {title}
      </NavLink>
      <div className="note__todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Note;

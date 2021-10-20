import React from "react";
import Note from "../../components/Note";
import { TNote } from "../../types";
import "./style.scss";

const notes: TNote[] = [
  {
    id: "1",
    title: "title 1",
    todos: [
      { id: "1", isComplete: false, text: "Чекнуть" },
      { id: "2", isComplete: true, text: "Дунуть" },
    ],
  },
  {
    id: "2",
    title: "title 2",
    todos: [],
  },
  {
    id: "3",
    title: "title 3",
    todos: [],
  },
];

const MainPage = () => {
  return (
    <div className="main-page container">
      <div className="main-page__notes">
        {notes.map((note) => (
          <Note {...note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;

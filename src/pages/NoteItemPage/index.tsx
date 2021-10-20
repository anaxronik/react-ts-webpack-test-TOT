import React from "react";
import { useParams } from "react-router";
import { notes } from "../MainPage";
import "./style.scss";

const note = notes[0];

const NoteItemPage = () => {
  const { noteId } = useParams<{ noteId: string }>();

  return (
    <div className="note-item container">
      <div className="note-item__title">
        <label className="note-item__title-label" htmlFor="title">
          Название заметки
        </label>
        <input
          className="note-item__title-input"
          type="text"
          value={note.title}
          name="title"
          onChange={() => {}}
        />
      </div>
      <div className="note-item__todos">asdsad</div>
    </div>
  );
};

export default NoteItemPage;

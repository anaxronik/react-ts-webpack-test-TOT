import React, { useEffect } from "react";
import Note from "../../components/Note";
import { useActions } from "../../store/actionCreator";
import { useStoreSelector } from "../../store/reducers";
import "./style.scss";

const MainPage = () => {
  const notes = useStoreSelector((state) => state.notesReducer.notes);
  const { getNotes } = useActions();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="main-page container">
      <div className="main-page__notes">
        {notes.map((note) => (
          <Note {...note} key={note.id} />
        ))}

        {!notes?.length && <h1 className="main-page__empty">Заметок нет</h1>}
      </div>
    </div>
  );
};

export default MainPage;

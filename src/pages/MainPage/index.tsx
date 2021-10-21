import React from "react";
import Note from "../../components/Note";
import { useStoreSelector } from "../../store/reducers";
import "./style.scss";

const MainPage = () => {
  const notes = useStoreSelector((state) => state.notesReducer.notes);

  return (
    <div className="main-page container">
      <div className="main-page__notes">
        {notes.map((note) => (
          <Note {...note} key={note.id} />
        ))}

        {!notes?.length && <div className="main-page__empty">Заметок нет</div>}
      </div>
    </div>
  );
};

export default MainPage;

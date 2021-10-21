import { Dispatch } from "redux";
import { api } from "../../api/Api";
import { TNoteAction } from "../../types/note";
import { NotesActionTypes } from "../reducers/notesReducer";

export const getNotes = () => {
  return async (dispatch: Dispatch<TNoteAction>) => {
    try {
      const notes = await api.getAllNotes();
      dispatch({ type: NotesActionTypes.SET_NOTES, payload: notes });
    } catch (error: any) {
      console.error(error);
    }
  };
};

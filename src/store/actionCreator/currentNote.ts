import { Dispatch } from "redux";
import { api } from "../../api/Api";
import { TCurrentNoteActionType } from "../../types/note";
import { CurrentNoteActionTypes } from "../reducers/currenNoteReducer";

export const setCurrentNote = (id: string) => {
  return async (dispatch: Dispatch<TCurrentNoteActionType>) => {
    try {
      const note = await api.getById(id);
      if (note) {
        dispatch({ type: CurrentNoteActionTypes.SET_NOTE, payload: note });
      }
    } catch (error: any) {
      console.error(error);
    }
  };
};

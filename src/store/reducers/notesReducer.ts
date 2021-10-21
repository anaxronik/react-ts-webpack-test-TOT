import { INotesState, TNote, TNoteAction } from "../../types/note";

export enum NotesActionTypes {
  SET_NOTES = "SET_NOTES",
}

const initialState: INotesState = {
  notes: [],
};

export const notesReducer = (
  state = initialState,
  action: TNoteAction
): INotesState => {
  switch (action.type) {
    case NotesActionTypes.SET_NOTES:
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};

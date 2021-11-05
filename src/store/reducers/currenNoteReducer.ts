import { TCurrentNoteActionType, TNote } from "../../types/note";

export enum CurrentNoteActionTypes {
  SET_NOTE = "SET_NOTE",
}

const initialState: TNote = {
  id: "",
  title: "",
  todos: [],
};

export const currentNoteReducer = (
  state = initialState,
  action: TCurrentNoteActionType
): TNote => {
  switch (action.type) {
    case CurrentNoteActionTypes.SET_NOTE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

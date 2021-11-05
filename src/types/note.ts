import { CurrentNoteActionTypes } from "../store/reducers/currenNoteReducer";
import { NotesActionTypes } from "../store/reducers/notesReducer";
import { TTodo } from "./todo";

export interface INotesState {
  notes: TNote[];
}

export interface ISetNotesAction {
  type: NotesActionTypes.SET_NOTES;
  payload: TNote[];
}

export type TNoteAction = ISetNotesAction;

export type TNote = {
  id: string;
  title: string;
  todos: TTodo[];
};

export type TSetCurrentNoteActionType = {
  type: CurrentNoteActionTypes.SET_NOTE;
  payload: TNote;
};

export type TCurrentNoteActionType = TSetCurrentNoteActionType;

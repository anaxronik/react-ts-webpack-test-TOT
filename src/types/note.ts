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

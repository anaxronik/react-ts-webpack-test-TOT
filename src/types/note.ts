import { NotesActionTypes } from "../store/reducers/notesReducer";
import { TTodo } from "./todo";

export interface INotesState {
  notes: TNote[];
}

export interface INotesAction {
  type: NotesActionTypes;
  payload?: any;
}

export interface IGetUserAction {
  type: NotesActionTypes.GET_NOTES;
}

export type TNoteAction = IGetUserAction;

export type TNote = {
  id: string;
  title: string;
  todos: TTodo[];
};

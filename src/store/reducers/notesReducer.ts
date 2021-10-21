import { INotesState, TNote, TNoteAction } from "../../types/note";

export enum NotesActionTypes {
  GET_NOTES = "GET_NOTES",
}

export const initNotes: TNote[] = [
  {
    id: "1",
    title: "title 1",
    todos: [
      { id: "1", isComplete: false, text: "Чекнуть" },
      { id: "2", isComplete: true, text: "Дунуть" },
    ],
  },
  {
    id: "2",
    title: "title 2",
    todos: [],
  },
  {
    id: "3",
    title: "title 3",
    todos: [],
  },
];

const initialState: INotesState = {
  notes: [],
};

export const notesReducer = (
  state = initialState,
  action: TNoteAction
): INotesState => {
  switch (action.type) {
    case NotesActionTypes.GET_NOTES:
      return { ...state };

    default:
      return state;
  }
};

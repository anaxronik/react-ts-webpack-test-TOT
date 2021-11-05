import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";

export const rootReducer = combineReducers({
  notesReducer: notesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export const useStoreSelector: TypedUseSelectorHook<TRootState> = useSelector;

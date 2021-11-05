import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as NotesActionCreators from "./notes";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(NotesActionCreators, dispatch);
};

import { combineReducers } from "redux";

import { AppState } from "../components/App";
import { boardReducer } from "./board/reducers";
import { canvasReducer } from "./canvas/actions/reducers";
import { toolbarReducer } from "./toolbar/reducers";

export const initialState: AppState = {
  board: { pieces: [] },
  canvas: { bgImgUrl: '', color: '#000' },
  toolbar: { isOpen: true },
};

export default combineReducers({
  board: boardReducer,
  canvas: canvasReducer,
  toolbar: toolbarReducer,
});

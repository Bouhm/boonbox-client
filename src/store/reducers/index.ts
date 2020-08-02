import cloneDeep from "lodash.clonedeep";
import { combineReducers } from "redux";

import { AppState } from "../../components/App";
import {
  BoardActions,
  BoardActionTypes,
  CanvasActions,
  CanvasActionTypes,
  ToolbarActions,
  ToolbarActionTypes
} from "../actions";

export const initialState: AppState = {
  board: { pieces: [] },
  canvas: { bgImgUrl: '', color: '#000' },
  toolbar: { isOpen: true },
};

const boardReducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case BoardActions.SetBoard:
      return { ...state, board: action.payload };
    case BoardActions.AddPiece:
      let newBoard = cloneDeep(state.board);
      newBoard.pieces.push(action.payload);
      return { ...state, board: newBoard };
    case BoardActions.RemovePiece:
      return { ...state, board: action.payload };
    case BoardActions.UpdatePiece:
      return { ...state, board: action.payload };
    default:
      return state;
  }
};

const canvasReducer = (state = initialState, action: CanvasActionTypes) => {
  switch (action.type) {
    case CanvasActions.SetCanvas:
      return { ...state, canvas: action.payload };
    case CanvasActions.ChangeBackground:
      return { ...state, canvas: action.payload };
    case CanvasActions.SelectColor:
      return { ...state, canvas: action.payload };
    default:
      return state;
  }
};

const toolbarReducer = (state = initialState, action: ToolbarActionTypes) => {
  switch (action.type) {
    case ToolbarActions.ToggleToolbar:
      return { ...state, toolbar: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  board: boardReducer,
  canvas: canvasReducer,
  toolbar: toolbarReducer,
});

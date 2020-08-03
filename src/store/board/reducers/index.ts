import cloneDeep from "lodash.clonedeep";

import { initialState } from "../..";
import { BoardActions, BoardActionTypes } from "../actions";

export const boardReducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case BoardActions.SetBoard:
      return { ...state, board: action.payload };
    case BoardActions.AddPiece:
      let newBoard = cloneDeep(state.board);
      newBoard.pieces.push(action.payload);
      return { ...newBoard };
    case BoardActions.RemovePiece:
      return { ...state, board: action.payload };
    case BoardActions.UpdatePiece:
      return { ...state, board: action.payload };
    default:
      return state;
  }
};

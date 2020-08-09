import cloneDeep from "lodash.clonedeep";

import { BoardProps } from "../../../components/board/Board";
import { BoardActions, BoardActionTypes } from "../actions";

export const initialState: BoardProps = {
  pieces: [],
};

export const boardReducer = (state = initialState, action: BoardActionTypes) => {
  let newBoard = cloneDeep(state);

  switch (action.type) {
    case BoardActions.SetBoard:
      return action.payload;
    case BoardActions.AddPiece:
      newBoard.pieces.push(action.payload);
      return { ...state, ...newBoard };
    case BoardActions.RemovePiece:
      let idx = newBoard.pieces.indexOf(action.payload);
      newBoard.pieces.splice(idx, 1);
      return { ...state, ...newBoard };
    case BoardActions.UpdatePiece:
      idx = newBoard.pieces.indexOf(action.payload);
      newBoard.pieces[idx] = action.payload;
      return { ...state, ...newBoard };
    default:
      return state;
  }
};

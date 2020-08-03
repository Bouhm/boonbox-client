import { initialState } from "../../..";
import { CanvasActions, CanvasActionTypes } from "../actions";

export const canvasReducer = (state = initialState, action: CanvasActionTypes) => {
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

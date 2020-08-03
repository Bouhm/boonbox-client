import { initialState } from "../..";
import { ToolbarActions, ToolbarActionTypes } from "../actions";

export const toolbarReducer = (state = initialState, action: ToolbarActionTypes) => {
  switch (action.type) {
    case ToolbarActions.ToggleToolbar:
      return { ...state, toolbar: action.payload };
    default:
      return state;
  }
};

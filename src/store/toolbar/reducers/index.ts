import { ToolbarActions, ToolbarActionTypes } from '../actions';
import { ToolbarProps } from '../../../components/toolbar/Toolbar';

export const initialState: ToolbarProps = {
  isOpen: true,
};

export const toolbarReducer = (state = initialState, action: ToolbarActionTypes) => {
  switch (action.type) {
    case ToolbarActions.ToggleToolbar:
      return { isOpen: action.payload };
    default:
      return state;
  }
};

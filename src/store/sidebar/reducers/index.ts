import { SidebarActions, SidebarActionTypes } from '../actions';
import { ToolsProps } from '../../../components/sidebar/Tools';

export const initialState: ToolsProps = {
  isOpen: true,
};

export const sidebarReducer = (state = initialState, action: SidebarActionTypes) => {
  switch (action.type) {
    case SidebarActions.ToggleSidebar:
      return { isOpen: action.payload };
    default:
      return state;
  }
};

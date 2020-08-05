import { SidebarActions, SidebarActionTypes } from '../actions';
import { SidebarProps } from '../../../components/sidebar/Sidebar';

export const initialState: SidebarProps = {
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

import { SidebarProps } from '../../../components/sidebar/Sidebar';
import { SidebarActions, SidebarActionTypes } from '../actions';

export const initialState: SidebarProps = {
  isOpen: true,
  activeTab: 0,
};

export const sidebarReducer = (state = initialState, action: SidebarActionTypes) => {
  switch (action.type) {
    case SidebarActions.ChangeTab:
      return { activeTab: action.payload };
    case SidebarActions.ToggleSidebar:
      return { isOpen: action.payload };
    default:
      return state;
  }
};
